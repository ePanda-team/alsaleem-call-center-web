# FCM (Firebase Cloud Messaging) Setup Guide

## Overview
This system now supports sending push notifications to doctors through Firebase Cloud Messaging (FCM). Doctors can receive notifications for new announcements, test results, and messages.

## Setup Requirements

### 1. Firebase Project Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Cloud Messaging in the project
4. Generate a Server Key from Project Settings > Cloud Messaging

### 2. Environment Configuration
Add the following to your `.env` file:
```env
FCM_SERVER_KEY=your_firebase_server_key_here
```

### 3. Database Migration
The system automatically adds an `fcm_token` field to the doctors table:
```bash
php artisan migrate
```

## API Endpoints

### Update FCM Token
**POST** `/api/doctor/fcm-token`

**Headers:**
- `Authorization: Bearer {doctor_token}`
- `Content-Type: application/json`

**Body:**
```json
{
  "fcm_token": "doctor_fcm_token_from_mobile_app"
}
```

**Response:**
```json
{
  "success": true,
  "message": "FCM token updated successfully"
}
```

## Mobile App Integration

### 1. Get FCM Token
In your mobile app, get the FCM token:
```javascript
// React Native
import messaging from '@react-native-firebase/messaging';

const getFCMToken = async () => {
  const token = await messaging().getToken();
  return token;
};
```

### 2. Send Token to Server
```javascript
const updateFCMToken = async (token) => {
  const response = await fetch(`${API_BASE_URL}/api/doctor/fcm-token`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${doctorToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fcm_token: token
    })
  });
  
  return response.json();
};
```

### 3. Handle Token Refresh
```javascript
// Listen for token refresh
messaging().onTokenRefresh(async (token) => {
  await updateFCMToken(token);
});
```

## Notification Types

All doctor push notifications use **Arabic** title/body and include a `data` payload for deep linking. See [`docs/frontend/doctor/push-notifications.md`](docs/frontend/doctor/push-notifications.md).

### 1. Announcement Notifications
- **Trigger**: When a new announcement is created
- **Targeting**: Based on doctor specialties and experience levels
- **Data**: `type=announcement`, `route=announcement`, `announcement_id`, `entity_id`

### 2. New Result Notifications
- **Trigger**: When a new test result is assigned to a doctor
- **Targeting**: Specific doctor
- **Data**: `type=new_result`, `route=result`, `result_id`, `patient_id`, `patient_name`, `entity_id`

### 3. New Message Notifications
- **Trigger**: When staff sends a message to a doctor
- **Targeting**: Specific doctor
- **Data**: `type=new_message`, `route=conversation`, `conversation_id`, `entity_id`

### 4. Staff Comment on Result
- **Trigger**: When staff posts a comment on a doctor's result
- **Targeting**: Assigned doctor
- **Data**: `type=staff_result_comment`, `route=result`, `result_id`, `comment_id`, `patient_id`, `entity_id`

All `data` values are strings in the FCM payload. Every message also includes `click_action=FLUTTER_NOTIFICATION_CLICK`.

## Testing

### Test FCM Configuration
Visit `/test-fcm` to test if FCM is working properly (requires a doctor with FCM token).

### Test with Postman
Use the "Update FCM Token" request in the Postman collection to test the endpoint.

## Notification Service Usage

```php
use App\Services\NotificationService;

$notificationService = new NotificationService();

// Send to specific doctor
$notificationService->sendToDoctor($doctor, 'Title', 'Body', ['data' => 'value']);

// Send to multiple doctors
$notificationService->sendToDoctors([1, 2, 3], 'Title', 'Body', ['data' => 'value']);

// Send to all doctors
$notificationService->sendToAllDoctors('Title', 'Body', ['data' => 'value']);
```

## Troubleshooting

### Common Issues
1. **FCM Server Key not configured**: Check `.env` file has `FCM_SERVER_KEY`
2. **No doctors with FCM tokens**: Doctors need to update their tokens via mobile app
3. **Notifications not received**: Check Firebase project configuration and server key

### Logs
Check `storage/logs/laravel.log` for FCM-related errors and success messages.

## Security Notes
- FCM tokens are stored securely in the database
- Tokens are only accessible to authenticated doctors
- Server key should be kept secret and not exposed in client-side code
