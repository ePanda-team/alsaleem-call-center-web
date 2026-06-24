<?php

namespace App\Services;

use App\Models\Doctor;
use App\Models\LabTestRequest;
use App\Models\TestResult;
use App\Models\TestResultComment;
use Google_Client;
use Illuminate\Support\Facades\Log;

class NotificationService
{
    /**
     * Send notification to a specific doctor
     */
    public function sendToDoctor(Doctor $doctor, string $title, string $body, array $data = [])
    {
        if (! $doctor->fcm_token) {
            Log::warning("Doctor {$doctor->id} has no FCM token");

            return false;
        }

        return $this->sendToToken($doctor->fcm_token, $title, $body, $data);
    }

    /**
     * Send notification to multiple doctors
     */
    public function sendToDoctors(array $doctorIds, string $title, string $body, array $data = [])
    {
        $doctors = Doctor::whereIn('id', $doctorIds)
            ->whereNotNull('fcm_token')
            ->get();

        $tokens = $doctors->pluck('fcm_token')->toArray();

        if (empty($tokens)) {
            Log::warning('No doctors with FCM tokens found');

            return false;
        }

        return $this->sendToMultipleTokens($tokens, $title, $body, $data);
    }

    /**
     * Send notification to all doctors with FCM tokens
     */
    public function sendToAllDoctors(string $title, string $body, array $data = [])
    {
        $doctors = Doctor::whereNotNull('fcm_token')->get();

        if ($doctors->isEmpty()) {
            Log::warning('No doctors with FCM tokens found');

            return false;
        }

        $tokens = $doctors->pluck('fcm_token')->toArray();

        return $this->sendToMultipleTokens($tokens, $title, $body, $data);
    }

    /**
     * Send notification to a single FCM token
     */
    public function sendToToken(string $token, string $title, string $body, array $data = [])
    {
        Log::info('Sending notification to token: '.$token);

        return $this->sendFCMRequest($token, $title, $body, $data);
    }

    /**
     * Send notification to multiple FCM tokens
     */
    public function sendToMultipleTokens(array $tokens, string $title, string $body, array $data = [])
    {
        $success = false;

        foreach ($tokens as $token) {
            if ($this->sendFCMRequest($token, $title, $body, $data)) {
                $success = true;
            }
        }

        return $success;
    }

    /**
     * Send announcement notification to targeted doctors
     */
    public function sendAnnouncementNotification($announcement)
    {
        $title = $announcement->title;
        $body = $announcement->body;
        $data = $this->doctorPushData('announcement', 'announcement', $announcement->id, [
            'announcement_id' => $announcement->id,
        ]);

        if ($announcement->target_specialties || $announcement->target_experience_levels) {
            $query = Doctor::whereNotNull('fcm_token');

            if ($announcement->target_specialties) {
                $query->whereIn('speciality', $announcement->target_specialties);
            }

            if ($announcement->target_experience_levels) {
                $query->whereIn('experience_level', $announcement->target_experience_levels);
            }

            $doctors = $query->get();
            $tokens = $doctors->pluck('fcm_token')->toArray();

            if (! empty($tokens)) {
                return $this->sendToMultipleTokens($tokens, $title, $body, $data);
            }
        } else {
            return $this->sendToAllDoctors($title, $body, $data);
        }

        return false;
    }

    /**
     * Send new result notification to specific doctor
     */
    public function sendNewResultNotification(Doctor $doctor, TestResult $testResult)
    {
        $testResult->loadMissing('patient');
        $patientName = $testResult->patient?->name ?? 'غير معروف';

        $title = $this->trans('new_result.title');
        $body = $this->trans('new_result.body', ['patient_name' => $patientName]);
        $data = $this->doctorPushData('new_result', 'result', $testResult->id, [
            'result_id' => $testResult->id,
            'patient_id' => $testResult->patient_id,
            'patient_name' => $patientName,
        ]);

        return $this->sendToDoctor($doctor, $title, $body, $data);
    }

    /**
     * Send new message notification to doctor
     */
    public function sendNewMessageNotification(Doctor $doctor, $conversation)
    {
        $title = $this->trans('new_message.title');
        $body = $this->trans('new_message.body');
        $data = $this->doctorPushData('new_message', 'conversation', $conversation->id, [
            'conversation_id' => $conversation->id,
        ]);

        Log::info('Sending new message notification to doctor: '.$doctor->name);

        return $this->sendToDoctor($doctor, $title, $body, $data);
    }

    /**
     * Send notification when staff comments on a result
     */
    public function sendStaffResultCommentNotification(Doctor $doctor, TestResult $result, TestResultComment $comment)
    {
        $result->loadMissing('patient');
        $patientName = $result->patient?->name ?? 'غير معروف';

        $title = $this->trans('staff_result_comment.title');
        $body = $this->trans('staff_result_comment.body', ['patient_name' => $patientName]);
        $data = $this->doctorPushData('staff_result_comment', 'result', $result->id, [
            'result_id' => $result->id,
            'comment_id' => $comment->id,
            'patient_id' => $result->patient_id,
            'patient_name' => $patientName,
        ]);

        return $this->sendToDoctor($doctor, $title, $body, $data);
    }

    /**
     * Send notification when staff updates a lab test request status.
     */
    public function sendLabTestRequestStatusNotification(Doctor $doctor, LabTestRequest $request): bool
    {
        $status = $request->status;
        if (! in_array($status, ['reviewed', 'approved', 'rejected'], true)) {
            return false;
        }

        $title = $this->trans("lab_test_request_status.{$status}.title");
        $body = $this->trans("lab_test_request_status.{$status}.body");
        $data = $this->doctorPushData('lab_test_request_status', 'lab_test_request', $request->id, [
            'lab_test_request_id' => $request->id,
            'status' => $status,
        ]);

        return $this->sendToDoctor($doctor, $title, $body, $data);
    }

    /**
     * @return array<string, int|string>
     */
    private function doctorPushData(string $type, string $route, int $entityId, array $extra = []): array
    {
        return array_merge([
            'type' => $type,
            'route' => $route,
            'entity_id' => $entityId,
        ], $extra);
    }

    /**
     * @param  array<string, string>  $replace
     */
    private function trans(string $key, array $replace = []): string
    {
        return __("notifications.{$key}", $replace, 'ar');
    }

    /**
     * @return array<string, string>
     */
    private function formatFcmData(array $data): array
    {
        $formatted = ['click_action' => 'FLUTTER_NOTIFICATION_CLICK'];

        foreach ($data as $key => $value) {
            if ($value === null) {
                continue;
            }
            $formatted[(string) $key] = is_scalar($value) ? (string) $value : json_encode($value);
        }

        return $formatted;
    }

    private function getAccessToken()
    {
        $credentialsPath = storage_path('app/alsaleem-call-center-77b0f18015c6.json');

        $client = new Google_Client;
        $client->setAuthConfig($credentialsPath);
        $client->addScope('https://www.googleapis.com/auth/firebase.messaging');

        $token = $client->fetchAccessTokenWithAssertion();

        return $token['access_token'];
    }

    /**
     * Send the actual FCM request to a single device token
     */
    private function sendFCMRequest(string $token, string $title, string $body, array $data = [])
    {
        try {
            $client = new \GuzzleHttp\Client;
            $response = $client->post('https://fcm.googleapis.com/v1/projects/alsaleem-call-center/messages:send', [
                'headers' => [
                    'Authorization' => 'Bearer '.$this->getAccessToken(),
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'message' => [
                        'token' => $token,
                        'notification' => [
                            'title' => $title,
                            'body' => $body,
                        ],
                        'data' => $this->formatFcmData($data),
                    ],
                ],
            ]);

            if ($response->getStatusCode() === 200) {
                Log::info('FCM notification sent successfully', [
                    'token' => $token,
                    'data' => $data,
                ]);

                return true;
            }

            Log::error('FCM notification failed', [
                'status' => $response->getStatusCode(),
                'response' => (string) $response->getBody(),
                'data' => $data,
            ]);

            return false;
        } catch (\Exception $e) {
            Log::error('FCM notification exception', [
                'error' => $e->getMessage(),
                'data' => $data,
            ]);

            return false;
        }
    }
}
