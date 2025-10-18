<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Google_Client;

class FirebaseController extends Controller
{
    private function getAccessToken()
    {
        $credentialsPath = storage_path('app/alsaleem-call-center-77b0f18015c6.json'); // Path to your service account file

        $client = new Google_Client();
        $client->setAuthConfig($credentialsPath);
        $client->addScope('https://www.googleapis.com/auth/firebase.messaging');

        $token = $client->fetchAccessTokenWithAssertion();
        return $token['access_token'];
    }

    public function soloNotification($title,$body,$doctor)
    {
        $token = $doctor->fcm_token;
        try{
            $client = new Client();
            $response = $client->post('https://fcm.googleapis.com/v1/projects/emtiaz-eilmi/messages:send', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->getAccessToken(),
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'message' => [
                        'token' => $token,
                        'notification' => [
                            "title" => $title,
                            "body" => $body
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
            Log::error('token mismatch : ' . $doctor->name );
        }
    }
}
