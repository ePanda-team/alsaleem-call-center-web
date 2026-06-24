<?php

namespace App\Services;

use App\Models\Doctor;
use App\Models\StaffNotification;
use App\Models\User;

class StaffNotificationService
{
    public function notifyAllStaff(string $type, string $title, string $body, array $data): void
    {
        $userIds = $this->recipientUserIds($type);

        if ($userIds === []) {
            return;
        }

        $payload = array_merge(['type' => $type], $data);
        $now = now();

        $rows = array_map(fn (int $userId) => [
            'user_id' => $userId,
            'type' => $type,
            'title' => $title,
            'body' => $body,
            'data' => json_encode($payload),
            'read_at' => null,
            'created_at' => $now,
            'updated_at' => $now,
        ], $userIds);

        foreach (array_chunk($rows, 500) as $chunk) {
            StaffNotification::query()->insert($chunk);
        }
    }

    /**
     * @return list<int>
     */
    private function recipientUserIds(string $type): array
    {
        $permissionKey = config("staff_notifications.type_permissions.{$type}");

        if (! is_string($permissionKey) || $permissionKey === '') {
            return [];
        }

        return User::query()
            ->with('staffRole')
            ->get()
            ->filter(fn (User $user) => $user->canReceiveStaffNotification($type))
            ->pluck('id')
            ->map(fn ($id) => (int) $id)
            ->values()
            ->all();
    }

    /**
     * Notify all staff about a doctor action with Arabic title/body from lang file.
     *
     * @param  array<string, mixed>  $data
     */
    public function notifyDoctorAction(string $type, Doctor $doctor, array $data): void
    {
        $replace = array_merge([
            'doctor_name' => $doctor->name,
        ], $this->stringReplaceValues($data));

        $title = __("notifications.{$type}.title", $replace, 'ar');
        $body = __("notifications.{$type}.body", $replace, 'ar');

        $payload = array_merge([
            'doctor_id' => $doctor->id,
            'doctor_name' => $doctor->name,
        ], $data);

        $this->notifyAllStaff($type, $title, $body, $payload);
    }

    /**
     * @param  array<string, mixed>  $data
     * @return array<string, string>
     */
    private function stringReplaceValues(array $data): array
    {
        $replace = [];

        foreach ($data as $key => $value) {
            if (is_scalar($value)) {
                $replace[$key] = (string) $value;
            }
        }

        return $replace;
    }
}
