<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Staff role permission keys (staff / User model only)
    |--------------------------------------------------------------------------
    |
    | Used by the roles API and User::resolveStaffPermissions(). All keys are
    | booleans. The frontend enforces UI access; the API does not gate on these.
    | roles_management is only effective for users with role=admin (see User model).
    |
    */
    'keys' => [
        'chatting',
        'patient_results',
        'user_management',
        'roles_management',
        'doctor_management',
        'specialties_management',
        'announcement_management',
        'slider_management',
        'lab_tests_management',
        'branch_management',
    ],
];
