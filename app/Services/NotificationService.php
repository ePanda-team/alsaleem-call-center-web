<?php

namespace App\Services;

use App\Models\Doctor;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Google_Client;
class NotificationService
{
    /**
     * Send notification to a specific doctor
     */
    public function sendToDoctor(Doctor $doctor, string $title, string $body, array $data = [])
    {
        if (!$doctor->fcm_token) {
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
            Log::warning("No doctors with FCM tokens found");
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
            Log::warning("No doctors with FCM tokens found");
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
        Log::info('Sending notification to token: ' . $token);

        $payload = [
            'to' => $token,
            'notification' => [
                'title' => $title,
                'body' => $body,
                'sound' => 'default',
            ],
            'data' => $data,
        ];

        return $this->sendFCMRequest($payload);
    }

    /**
     * Send notification to multiple FCM tokens
     */
    public function sendToMultipleTokens(array $tokens, string $title, string $body, array $data = [])
    {

        foreach($tokens as $token)
        {
            Log::info('Sending notification to token: ' . $token);
        }
        $payload = [
            'registration_ids' => $tokens,
            'notification' => [
                'title' => $title,
                'body' => $body,
                'sound' => 'default',
            ],
            'data' => $data,
        ];

        return $this->sendFCMRequest($payload);
    }

    private function getAccessToken()
    {
        $credentialsPath = storage_path('app/alsaleem-call-center-77b0f18015c6.json'); // Path to your service account file

        $client = new Google_Client();
        $client->setAuthConfig($credentialsPath);
        $client->addScope('https://www.googleapis.com/auth/firebase.messaging');

        $token = $client->fetchAccessTokenWithAssertion();
        return $token['access_token'];
    }

    /**
     * Send the actual FCM request
     */
    private function sendFCMRequest(array $payload)
    {
        try {
            try{
                $client = new \GuzzleHttp\Client();
                $response = $client->post('https://fcm.googleapis.com/v1/projects/alsaleem-call-center/messages:send', [
                    'headers' => [
                        'Authorization' => 'Bearer ' . $this->getAccessToken(),
                        'Content-Type' => 'application/json',
                    ],
                    'json' => [
                        'message' => [
                            'token' => $payload['to'],
                            'notification' => [
                                "title" => $payload['notification']['title'],
                                "body" => $payload['notification']['body']
                            ],
                            'data' => [
                                'click_action' => 'FLUTTER_NOTIFICATION_CLICK',
                            ]
                        ],
                    ],
                ]);
                if($response->getStatusCode() == 200)
                {
                    return true;
                }
            }catch(\Exception $e) 
            {
                Log::error($e->getMessage());
                return false;
            }

            if ($response->successful()) {
                $responseData = $response->json();
                Log::info('FCM notification sent successfully', [
                    'response' => $responseData,
                    'payload' => $payload
                ]);
                return $responseData;
            } else {
                Log::error('FCM notification failed', [
                    'status' => $response->status(),
                    'response' => $response->body(),
                    'payload' => $payload
                ]);
                return false;
            }
        } catch (\Exception $e) {
            Log::error('FCM notification exception', [
                'error' => $e->getMessage(),
                'payload' => $payload
            ]);
            return false;
        }
    }

    /**
     * Send announcement notification to targeted doctors
     */
    public function sendAnnouncementNotification($announcement)
    {
        $title = $announcement->title;
        $body = $announcement->body;
        $data = [
            'type' => 'announcement',
            'announcement_id' => $announcement->id,
            'title' => $announcement->title,
        ];

        // If announcement has targeting, send to specific doctors
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
            
            if (!empty($tokens)) {
                return $this->sendToMultipleTokens($tokens, $title, $body, $data);
            }
        } else {
            // Send to all doctors
            return $this->sendToAllDoctors($title, $body, $data);
        }

        return false;
    }

    /**
     * Send new result notification to specific doctor
     */
    public function sendNewResultNotification(Doctor $doctor, $testResult)
    {
        $title = 'New Test Result Available';
        $body = "New test result for patient: {$testResult->patient_name}";
        $data = [
            'type' => 'new_result',
            'result_id' => $testResult->id,
            'patient_name' => $testResult->patient_name,
        ];

        return $this->sendToDoctor($doctor, $title, $body, $data);
    }

    /**
     * Send new message notification to doctor
     */
    public function sendNewMessageNotification(Doctor $doctor, $conversation)
    {
        $title = 'New Message';
        $body = 'You have received a new message';
        $data = [
            'type' => 'new_message',
            'conversation_id' => $conversation->id,
        ];
        Log::info('Sending new message notification to doctor: ' . $doctor->name);
        return $this->sendToDoctor($doctor, $title, $body, $data);
    }
}
