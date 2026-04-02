<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Upload Configuration
    |--------------------------------------------------------------------------
    |
    | Configuration for file uploads including size limits and allowed types.
    |
    */

    'max_file_size' => 51200, // 50MB in KB (Laravel file max rule uses kilobytes)
    'max_total_size' => 51200, // 50MB in KB

    'allowed_types' => [
        'image' => ['jpg', 'jpeg', 'png', 'gif'],
        'video' => ['mp4', 'avi', 'mov', 'webm'],
        'audio' => ['mp3', 'wav', 'ogg', 'm4a', 'aac'],
        'document' => ['pdf', 'doc', 'docx', 'txt'],
    ],

    'upload_path' => 'announcements',
];
