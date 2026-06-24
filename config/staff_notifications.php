<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Staff notification type → permission key
    |--------------------------------------------------------------------------
    |
    | When a doctor action creates a staff notification, only users whose
    | effective permissions include the mapped key receive a row. Admins
    | always receive all types via User::resolveStaffPermissions().
    |
    */
    'type_permissions' => [
        'doctor_message' => 'chatting',
        'doctor_message_deleted' => 'chatting',
        'doctor_result_comment' => 'patient_results',
        'doctor_result_deleted' => 'patient_results',
        'doctor_profile_updated' => 'doctor_management',
        'doctor_lab_test_request' => 'lab_test_requests_management',
    ],
];
