<?php

namespace Tests\Feature;

use App\Models\Doctor;
use App\Models\Role;
use App\Models\StaffNotification;
use App\Models\User;
use App\Services\StaffNotificationService;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use PHPUnit\Framework\Attributes\DataProvider;
use Tests\TestCase;

class StaffNotificationPermissionsTest extends TestCase
{
    private User $chatUser;

    private User $labUser;

    private User $adminUser;

    private Doctor $doctor;

    protected function setUp(): void
    {
        parent::setUp();

        $this->createSchema();
        $this->seedUsersAndDoctor();
    }

    private function createSchema(): void
    {
        Schema::dropAllTables();

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->json('permissions');
            $table->timestamps();
        });

        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('role')->nullable();
            $table->unsignedBigInteger('role_id')->nullable();
            $table->timestamps();
        });

        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username')->unique();
            $table->string('password');
            $table->string('experience_level')->default('specialist');
            $table->timestamps();
        });

        Schema::create('doctor_lab_catalog_seens', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('doctor_id');
            $table->timestamp('seen_at')->nullable();
            $table->timestamps();
        });

        Schema::create('staff_notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('type');
            $table->string('title');
            $table->text('body');
            $table->json('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });
    }

    private function seedUsersAndDoctor(): void
    {
        $chatRole = Role::query()->create([
            'name' => 'Chat only',
            'slug' => 'chat-only',
            'permissions' => Role::normalizePermissionsArray(['chatting' => true]),
        ]);

        $labRole = Role::query()->create([
            'name' => 'Lab requests only',
            'slug' => 'lab-requests-only',
            'permissions' => Role::normalizePermissionsArray(['lab_test_requests_management' => true]),
        ]);

        $this->chatUser = User::query()->create([
            'name' => 'Chat Agent',
            'email' => 'chat-agent@example.com',
            'password' => Hash::make('password'),
            'role' => 'agent',
            'role_id' => $chatRole->id,
        ]);

        $this->labUser = User::query()->create([
            'name' => 'Lab Agent',
            'email' => 'lab-agent@example.com',
            'password' => Hash::make('password'),
            'role' => 'agent',
            'role_id' => $labRole->id,
        ]);

        $this->adminUser = User::query()->create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'role_id' => null,
        ]);

        $this->doctor = Doctor::query()->create([
            'name' => 'Dr. Test',
            'username' => 'dr_test',
            'password' => Hash::make('password'),
        ]);
    }

    #[DataProvider('notificationTypeProvider')]
    public function test_notifications_are_delivered_only_to_users_with_required_permission(
        string $type,
        bool $chatUserReceives,
        bool $labUserReceives,
        bool $adminReceives,
    ): void {
        app(StaffNotificationService::class)->notifyDoctorAction($type, $this->doctor, [
            'route' => 'conversation',
            'entity_id' => 1,
        ]);

        $this->assertSame(
            $chatUserReceives ? 1 : 0,
            StaffNotification::query()->where('user_id', $this->chatUser->id)->where('type', $type)->count()
        );
        $this->assertSame(
            $labUserReceives ? 1 : 0,
            StaffNotification::query()->where('user_id', $this->labUser->id)->where('type', $type)->count()
        );
        $this->assertSame(
            $adminReceives ? 1 : 0,
            StaffNotification::query()->where('user_id', $this->adminUser->id)->where('type', $type)->count()
        );
    }

    /**
     * @return array<string, array{0: string, 1: bool, 2: bool, 3: bool}>
     */
    public static function notificationTypeProvider(): array
    {
        return [
            'doctor_message' => ['doctor_message', true, false, true],
            'doctor_message_deleted' => ['doctor_message_deleted', true, false, true],
            'doctor_result_comment' => ['doctor_result_comment', false, false, true],
            'doctor_result_deleted' => ['doctor_result_deleted', false, false, true],
            'doctor_profile_updated' => ['doctor_profile_updated', false, false, true],
            'doctor_lab_test_request' => ['doctor_lab_test_request', false, true, true],
        ];
    }

    public function test_unknown_notification_type_is_not_delivered(): void
    {
        app(StaffNotificationService::class)->notifyAllStaff(
            'unknown_type',
            'Title',
            'Body',
            ['route' => 'conversation']
        );

        $this->assertSame(0, StaffNotification::query()->count());
    }

    public function test_user_can_receive_staff_notification_helper(): void
    {
        $this->assertTrue($this->chatUser->canReceiveStaffNotification('doctor_message'));
        $this->assertFalse($this->chatUser->canReceiveStaffNotification('doctor_lab_test_request'));
        $this->assertTrue($this->labUser->canReceiveStaffNotification('doctor_lab_test_request'));
        $this->assertFalse($this->labUser->canReceiveStaffNotification('doctor_message'));
        $this->assertTrue($this->adminUser->canReceiveStaffNotification('doctor_profile_updated'));
    }
}
