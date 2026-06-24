<?php

namespace Database\Seeders;

use App\Models\LabTestRequest;
use App\Models\Patient;
use App\Models\TestResultComment;
use Carbon\CarbonImmutable;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * Local/staging only seeder for pagination and performance testing.
 *
 * Run explicitly after the base seed:
 * php artisan db:seed --class=LoadTestSeeder
 */
class LoadTestSeeder extends Seeder
{
    private const DOCTOR_PREFIX = 'loadtest_dr_';

    private const STAFF_EMAIL_PREFIX = 'loadtest_agent_';

    private const PATIENT_PREFIX = 'LoadTest Patient ';

    private const BRANCH_PREFIX = 'LoadTest Branch ';

    private const LAB_TEST_PREFIX = 'LoadTest Lab Test ';

    private const ANNOUNCEMENT_PREFIX = 'LoadTest ';

    private const PDF_PREFIX = 'results/loadtest_';

    private const REQUEST_NOTES_PREFIX = 'LoadTest request ';

    private const CHUNK_SIZE = 500;

    /**
     * @var array<string, int>
     */
    private array $counts = [];

    /**
     * @var array<string, int>
     */
    private array $summary = [];

    public function run(): void
    {
        $this->counts = $this->counts();
        $this->summary = [];

        $this->command?->info('Preparing load-test dataset...');

        $this->cleanupLoadTestData();

        $now = CarbonImmutable::now();
        $specialties = DB::table('specialties')->orderBy('name_en')->pluck('name_en')->filter()->values()->all();
        if ($specialties === []) {
            $specialties = config('doctor.specialties', ['General Surgery']);
        }

        $experienceLevels = array_keys(config('doctor.experience_levels', [
            'specialist' => '',
            'doctor' => '',
            'consultant' => '',
        ]));
        $agentRoleId = DB::table('roles')->where('slug', 'agent')->value('id');

        $branchNames = $this->seedLabBranches($now);
        $labTestNames = $this->seedLabTests($now);
        $staffIds = $this->seedStaffUsers($agentRoleId, $branchNames, $now);
        [$doctorIds, $conversationMap] = $this->seedDoctorsAndConversations($specialties, $experienceLevels, $staffIds, $now);
        $patientIds = $this->seedPatients($now);

        [$resultIds, $resultDoctorIds, $resultPatientIds] = $this->seedResults($patientIds, $doctorIds, $branchNames, $now);
        $viewedResultIds = $this->seedDoctorViews($resultIds, $resultDoctorIds, $now);
        $this->seedComments($resultIds, $resultDoctorIds, $staffIds, $viewedResultIds, $now);

        $announcementIds = $this->seedAnnouncements($doctorIds, $specialties, $experienceLevels, $now);
        $this->seedMessages($conversationMap, $staffIds, $doctorIds, $now);
        $this->seedLabRequests($doctorIds, $labTestNames, $now);
        $this->seedStaffNotifications($staffIds, $announcementIds, $now);

        $this->printSummary();
    }

    /**
     * @return array<string, int>
     */
    private function counts(): array
    {
        return [
            'doctors' => (int) env('LOAD_TEST_DOCTORS', 20),
            'staff' => (int) env('LOAD_TEST_STAFF', 10),
            'patients' => (int) env('LOAD_TEST_PATIENTS', 5000),
            'results' => (int) env('LOAD_TEST_RESULTS', 25000),
            'comments' => (int) env('LOAD_TEST_COMMENTS', 40000),
            'messages' => (int) env('LOAD_TEST_MESSAGES', 10000),
            'announcements' => (int) env('LOAD_TEST_ANNOUNCEMENTS', 200),
            'lab_tests' => (int) env('LOAD_TEST_LAB_TESTS', 100),
            'lab_branches' => (int) env('LOAD_TEST_LAB_BRANCHES', 8),
            'lab_requests' => (int) env('LOAD_TEST_LAB_REQUESTS', 150),
            'notifications' => (int) env('LOAD_TEST_NOTIFICATIONS', 2000),
        ];
    }

    private function cleanupLoadTestData(): void
    {
        $doctorIds = DB::table('doctors')
            ->where('username', 'like', self::DOCTOR_PREFIX.'%')
            ->pluck('id');

        $userIds = DB::table('users')
            ->where('email', 'like', self::STAFF_EMAIL_PREFIX.'%@example.com')
            ->pluck('id');

        DB::table('announcements')
            ->where('title', 'like', self::ANNOUNCEMENT_PREFIX.'%')
            ->delete();

        if ($doctorIds->isNotEmpty()) {
            DB::table('doctors')->whereIn('id', $doctorIds)->delete();
        }

        DB::table('patients')
            ->where('name', 'like', self::PATIENT_PREFIX.'%')
            ->delete();

        DB::table('lab_tests')
            ->where('name', 'like', self::LAB_TEST_PREFIX.'%')
            ->delete();

        DB::table('lab_branches')
            ->where('name', 'like', self::BRANCH_PREFIX.'%')
            ->delete();

        if ($userIds->isNotEmpty()) {
            DB::table('users')->whereIn('id', $userIds)->delete();
        }
    }

    /**
     * @return list<string>
     */
    private function seedLabBranches(CarbonImmutable $now): array
    {
        $rows = [];

        for ($i = 1; $i <= $this->counts['lab_branches']; $i++) {
            $rows[] = [
                'name' => self::BRANCH_PREFIX.str_pad((string) $i, 2, '0', STR_PAD_LEFT),
                'address' => 'Performance District '.(($i % 5) + 1),
                'phone' => '050'.str_pad((string) (1000000 + $i), 7, '0', STR_PAD_LEFT),
                'is_active' => 1,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        $this->insertInChunks('lab_branches', $rows);
        $branchNames = DB::table('lab_branches')
            ->where('name', 'like', self::BRANCH_PREFIX.'%')
            ->orderBy('name')
            ->pluck('name')
            ->all();

        $this->summary['lab_branches'] = count($branchNames);

        return $branchNames;
    }

    /**
     * @return list<string>
     */
    private function seedLabTests(CarbonImmutable $now): array
    {
        $rows = [];

        for ($i = 1; $i <= $this->counts['lab_tests']; $i++) {
            $rows[] = [
                'name' => self::LAB_TEST_PREFIX.str_pad((string) $i, 3, '0', STR_PAD_LEFT),
                'description' => 'Synthetic lab test generated for pagination and performance validation.',
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        $this->insertInChunks('lab_tests', $rows);
        $labTestNames = DB::table('lab_tests')
            ->where('name', 'like', self::LAB_TEST_PREFIX.'%')
            ->orderBy('name')
            ->pluck('name')
            ->all();

        $this->summary['lab_tests'] = count($labTestNames);

        return $labTestNames;
    }

    /**
     * @param  list<string>  $branchNames
     * @return list<int>
     */
    private function seedStaffUsers(?int $agentRoleId, array $branchNames, CarbonImmutable $now): array
    {
        $rows = [];
        $password = Hash::make('password');

        for ($i = 1; $i <= $this->counts['staff']; $i++) {
            $rows[] = [
                'name' => 'LoadTest Agent '.str_pad((string) $i, 3, '0', STR_PAD_LEFT),
                'email' => self::STAFF_EMAIL_PREFIX.str_pad((string) $i, 3, '0', STR_PAD_LEFT).'@example.com',
                'email_verified_at' => $now,
                'password' => $password,
                'remember_token' => Str::random(10),
                'role' => 'agent',
                'role_id' => $agentRoleId,
                'branch_assignment' => $branchNames === [] ? null : $branchNames[($i - 1) % count($branchNames)],
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        $this->insertInChunks('users', $rows);

        $staffIds = DB::table('users')
            ->where('email', 'like', self::STAFF_EMAIL_PREFIX.'%@example.com')
            ->orderBy('email')
            ->pluck('id')
            ->map(fn ($id) => (int) $id)
            ->all();

        $this->summary['staff'] = count($staffIds);

        return $staffIds;
    }

    /**
     * @param  list<string>  $specialties
     * @param  list<string>  $experienceLevels
     * @param  list<int>  $staffIds
     * @return array{0: list<int>, 1: array<int, int>}
     */
    private function seedDoctorsAndConversations(array $specialties, array $experienceLevels, array $staffIds, CarbonImmutable $now): array
    {
        $rows = [];
        $password = Hash::make('password');

        for ($i = 1; $i <= $this->counts['doctors']; $i++) {
            $rows[] = [
                'name' => 'LoadTest Doctor '.str_pad((string) $i, 3, '0', STR_PAD_LEFT),
                'username' => self::DOCTOR_PREFIX.str_pad((string) $i, 3, '0', STR_PAD_LEFT),
                'speciality' => $specialties[($i - 1) % count($specialties)],
                'experience_level' => $experienceLevels[($i - 1) % count($experienceLevels)],
                'phone' => '051'.str_pad((string) (1000000 + $i), 7, '0', STR_PAD_LEFT),
                'fcm_token' => null,
                'password' => $password,
                'bio' => 'Synthetic doctor profile used for pagination and performance testing.',
                'profile_picture_path' => null,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        $this->insertInChunks('doctors', $rows);

        $doctorRows = DB::table('doctors')
            ->where('username', 'like', self::DOCTOR_PREFIX.'%')
            ->orderBy('username')
            ->get(['id', 'username']);

        $doctorIds = $doctorRows->pluck('id')->map(fn ($id) => (int) $id)->all();

        $catalogRows = [];
        $conversationRows = [];
        foreach ($doctorIds as $index => $doctorId) {
            $catalogRows[] = [
                'doctor_id' => $doctorId,
                'seen_at' => $now->subDays($index % 14),
                'created_at' => $now,
                'updated_at' => $now,
            ];

            $conversationRows[] = [
                'doctor_id' => $doctorId,
                'user_id' => $staffIds === [] ? null : $staffIds[$index % count($staffIds)],
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        $this->insertInChunks('doctor_lab_catalog_seens', $catalogRows);
        $this->insertInChunks('conversations', $conversationRows);

        $conversationMap = DB::table('conversations')
            ->whereIn('doctor_id', $doctorIds)
            ->pluck('id', 'doctor_id')
            ->mapWithKeys(fn ($conversationId, $doctorId) => [(int) $doctorId => (int) $conversationId])
            ->all();

        $this->summary['doctors'] = count($doctorIds);
        $this->summary['conversations'] = count($conversationMap);

        return [$doctorIds, $conversationMap];
    }

    /**
     * @return list<int>
     */
    private function seedPatients(CarbonImmutable $now): array
    {
        $rows = [];
        $genders = Patient::GENDERS;

        for ($i = 1; $i <= $this->counts['patients']; $i++) {
            $rows[] = [
                'name' => self::PATIENT_PREFIX.str_pad((string) $i, 6, '0', STR_PAD_LEFT),
                'birth_year' => 1940 + ($i % 71),
                'gender' => $genders[($i - 1) % count($genders)],
                'created_at' => $now->subDays($i % 365),
                'updated_at' => $now->subDays($i % 120),
            ];
        }

        $this->insertInChunks('patients', $rows);

        $patientIds = DB::table('patients')
            ->where('name', 'like', self::PATIENT_PREFIX.'%')
            ->orderBy('name')
            ->pluck('id')
            ->map(fn ($id) => (int) $id)
            ->all();

        $this->summary['patients'] = count($patientIds);

        return $patientIds;
    }

    /**
     * @param  list<int>  $patientIds
     * @param  list<int>  $doctorIds
     * @param  list<string>  $branchNames
     * @return array{0: list<int>, 1: array<int, int>, 2: array<int, int>}
     */
    private function seedResults(array $patientIds, array $doctorIds, array $branchNames, CarbonImmutable $now): array
    {
        $hospitals = [
            'LoadTest General Hospital',
            'Performance Medical Center',
            'Synthetic City Hospital',
            'Pagination Specialist Clinic',
            'Stress Test Medical Complex',
        ];

        $rows = [];

        for ($i = 1; $i <= $this->counts['results']; $i++) {
            $createdAt = $now->subDays($i % 180)->subMinutes($i % 1440);

            $rows[] = [
                'patient_id' => $patientIds[($i - 1) % count($patientIds)],
                'hospital' => $hospitals[($i - 1) % count($hospitals)],
                'lab_branch' => $branchNames[($i - 1) % count($branchNames)],
                'doctor_id' => $doctorIds[($i - 1) % count($doctorIds)],
                'pdf_path' => self::PDF_PREFIX.str_pad((string) $i, 6, '0', STR_PAD_LEFT).'.pdf',
                'created_at' => $createdAt,
                'updated_at' => $createdAt->addHours(($i % 48) + 1),
            ];
        }

        $this->insertInChunks('test_results', $rows);

        $results = DB::table('test_results')
            ->where('pdf_path', 'like', self::PDF_PREFIX.'%')
            ->orderBy('id')
            ->get(['id', 'doctor_id', 'patient_id']);

        $resultIds = [];
        $resultDoctorIds = [];
        $resultPatientIds = [];
        foreach ($results as $result) {
            $resultId = (int) $result->id;
            $resultIds[] = $resultId;
            $resultDoctorIds[$resultId] = (int) $result->doctor_id;
            $resultPatientIds[$resultId] = (int) $result->patient_id;
        }

        $this->summary['results'] = count($resultIds);

        return [$resultIds, $resultDoctorIds, $resultPatientIds];
    }

    /**
     * @param  list<int>  $resultIds
     * @param  array<int, int>  $resultDoctorIds
     * @return array<int, true>
     */
    private function seedDoctorViews(array $resultIds, array $resultDoctorIds, CarbonImmutable $now): array
    {
        $rows = [];
        $viewedResultIds = [];

        foreach ($resultIds as $index => $resultId) {
            if (($index % 100) >= 65) {
                continue;
            }

            $commentsSeenAt = null;
            if ($index % 6 === 0) {
                $commentsSeenAt = $now->subDays($index % 20)->subHours(2);
            }

            $rows[] = [
                'doctor_id' => $resultDoctorIds[$resultId],
                'test_result_id' => $resultId,
                'viewed_at' => $now->subDays($index % 30),
                'comments_seen_at' => $commentsSeenAt,
                'created_at' => $now,
                'updated_at' => $now,
            ];

            $viewedResultIds[$resultId] = true;
        }

        $this->insertInChunks('test_result_doctor_views', $rows);
        $this->summary['doctor_views'] = count($rows);

        return $viewedResultIds;
    }

    /**
     * @param  list<int>  $resultIds
     * @param  array<int, int>  $resultDoctorIds
     * @param  list<int>  $staffIds
     * @param  array<int, true>  $viewedResultIds
     */
    private function seedComments(
        array $resultIds,
        array $resultDoctorIds,
        array $staffIds,
        array $viewedResultIds,
        CarbonImmutable $now
    ): void {
        if ($resultIds === []) {
            $this->summary['comments'] = 0;

            return;
        }

        $targetResultCount = max(1, (int) ceil(count($resultIds) * 0.4));
        $commentedResultIds = array_slice($resultIds, 0, $targetResultCount);

        $rows = [];
        for ($i = 0; $i < $this->counts['comments']; $i++) {
            $resultId = $commentedResultIds[$i % count($commentedResultIds)];
            $isStaffComment = ($i % 10) < 7;
            $authorId = $isStaffComment
                ? $staffIds[$i % count($staffIds)]
                : $resultDoctorIds[$resultId];

            $createdAt = isset($viewedResultIds[$resultId]) && ($i % 5 === 0)
                ? $now->subHours($i % 12)
                : $now->subDays(($i % 45) + 1)->subMinutes($i % 300);

            $rows[] = [
                'test_result_id' => $resultId,
                'author_type' => $isStaffComment ? TestResultComment::AUTHOR_STAFF : TestResultComment::AUTHOR_DOCTOR,
                'author_id' => $authorId,
                'body' => sprintf(
                    'Load-test comment %d on result %d for thread and unread badge testing.',
                    $i + 1,
                    $resultId
                ),
                'created_at' => $createdAt,
                'updated_at' => $createdAt,
            ];
        }

        $this->insertInChunks('test_result_comments', $rows);
        $this->summary['comments'] = count($rows);
    }

    /**
     * @param  array<int, int>  $conversationMap
     * @param  list<int>  $staffIds
     * @param  list<int>  $doctorIds
     */
    private function seedMessages(array $conversationMap, array $staffIds, array $doctorIds, CarbonImmutable $now): void
    {
        $rows = [];

        for ($i = 0; $i < $this->counts['messages']; $i++) {
            $doctorId = $doctorIds[$i % count($doctorIds)];
            $senderType = ($i % 2 === 0) ? 'user' : 'doctor';
            $createdAt = $now->subDays($i % 60)->subMinutes($i % 600);

            $rows[] = [
                'conversation_id' => $conversationMap[$doctorId],
                'sender_type' => $senderType,
                'sender_id' => $senderType === 'user'
                    ? $staffIds[$i % count($staffIds)]
                    : $doctorId,
                'body' => sprintf('Load-test message %d for conversation performance checks.', $i + 1),
                'attachment_path' => null,
                'attachment_type' => null,
                'read_at' => $senderType === 'user' && ($i % 10) < 3 ? null : $createdAt->addHour(),
                'created_at' => $createdAt,
                'updated_at' => $createdAt,
            ];
        }

        $this->insertInChunks('messages', $rows);
        $this->summary['messages'] = count($rows);
    }

    /**
     * @param  list<int>  $doctorIds
     * @param  list<string>  $specialties
     * @param  list<string>  $experienceLevels
     * @return list<int>
     */
    private function seedAnnouncements(
        array $doctorIds,
        array $specialties,
        array $experienceLevels,
        CarbonImmutable $now
    ): array {
        $rows = [];

        for ($i = 1; $i <= $this->counts['announcements']; $i++) {
            $targetSpecialties = $i % 3 === 0 ? [$specialties[$i % count($specialties)]] : null;
            $targetExperienceLevels = $i % 4 === 0 ? [$experienceLevels[$i % count($experienceLevels)]] : null;

            $rows[] = [
                'title' => self::ANNOUNCEMENT_PREFIX.'Announcement '.str_pad((string) $i, 3, '0', STR_PAD_LEFT),
                'body' => 'Synthetic announcement generated to exercise announcement pagination and doctor targeting.',
                'target_specialties' => $targetSpecialties ? json_encode($targetSpecialties, JSON_UNESCAPED_UNICODE) : null,
                'target_experience_levels' => $targetExperienceLevels ? json_encode($targetExperienceLevels, JSON_UNESCAPED_UNICODE) : null,
                'media_files' => null,
                'created_at' => $now->subDays($i % 90),
                'updated_at' => $now->subDays($i % 90),
            ];
        }

        $this->insertInChunks('announcements', $rows);

        $announcementIds = DB::table('announcements')
            ->where('title', 'like', self::ANNOUNCEMENT_PREFIX.'%')
            ->orderBy('id')
            ->pluck('id')
            ->map(fn ($id) => (int) $id)
            ->all();

        $viewRows = [];
        foreach ($announcementIds as $index => $announcementId) {
            if ($index % 2 !== 0) {
                continue;
            }

            $doctorId = $doctorIds[$index % count($doctorIds)];
            $viewRows[] = [
                'announcement_id' => $announcementId,
                'doctor_id' => $doctorId,
                'viewed_at' => $now->subDays($index % 20),
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        $this->insertInChunks('announcement_views', $viewRows);
        $this->summary['announcements'] = count($announcementIds);
        $this->summary['announcement_views'] = count($viewRows);

        return $announcementIds;
    }

    /**
     * @param  list<int>  $doctorIds
     * @param  list<string>  $labTestNames
     */
    private function seedLabRequests(array $doctorIds, array $labTestNames, CarbonImmutable $now): void
    {
        $rows = [];

        for ($i = 1; $i <= $this->counts['lab_requests']; $i++) {
            $rows[] = [
                'doctor_id' => $doctorIds[($i - 1) % count($doctorIds)],
                'status' => LabTestRequest::STATUSES[($i - 1) % count(LabTestRequest::STATUSES)],
                'notes' => self::REQUEST_NOTES_PREFIX.str_pad((string) $i, 4, '0', STR_PAD_LEFT),
                'created_at' => $now->subDays($i % 75),
                'updated_at' => $now->subDays($i % 75),
            ];
        }

        $this->insertInChunks('lab_test_requests', $rows);

        $requestIds = DB::table('lab_test_requests')
            ->where('notes', 'like', self::REQUEST_NOTES_PREFIX.'%')
            ->orderBy('id')
            ->pluck('id')
            ->map(fn ($id) => (int) $id)
            ->all();

        $itemRows = [];
        foreach ($requestIds as $index => $requestId) {
            $itemCount = ($index % 4) + 1;
            for ($item = 0; $item < $itemCount; $item++) {
                $labTestName = $labTestNames[($index + $item) % count($labTestNames)];
                $itemRows[] = [
                    'lab_test_request_id' => $requestId,
                    'test_name' => $labTestName,
                    'description' => 'Synthetic lab request item for list pagination coverage.',
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }
        }

        $this->insertInChunks('lab_test_request_items', $itemRows);
        $this->summary['lab_requests'] = count($requestIds);
        $this->summary['lab_request_items'] = count($itemRows);
    }

    /**
     * @param  list<int>  $staffIds
     * @param  list<int>  $announcementIds
     */
    private function seedStaffNotifications(array $staffIds, array $announcementIds, CarbonImmutable $now): void
    {
        $rows = [];

        for ($i = 0; $i < $this->counts['notifications']; $i++) {
            $createdAt = $now->subDays($i % 45)->subMinutes($i % 300);
            $rows[] = [
                'user_id' => $staffIds[$i % count($staffIds)],
                'type' => $i % 2 === 0 ? 'result_comment' : 'announcement',
                'title' => 'LoadTest Notification '.str_pad((string) ($i + 1), 5, '0', STR_PAD_LEFT),
                'body' => 'Synthetic staff notification generated for unread and pagination testing.',
                'data' => json_encode([
                    'announcement_id' => $announcementIds === [] ? null : $announcementIds[$i % count($announcementIds)],
                    'result_id' => ($i % max(1, $this->counts['results'])) + 1,
                    'source' => 'load-test-seeder',
                ], JSON_UNESCAPED_UNICODE),
                'read_at' => ($i % 5 === 0) ? null : $createdAt->addMinutes(30),
                'created_at' => $createdAt,
                'updated_at' => $createdAt,
            ];
        }

        $this->insertInChunks('staff_notifications', $rows);
        $this->summary['staff_notifications'] = count($rows);
    }

    private function printSummary(): void
    {
        $this->command?->newLine();
        $this->command?->info('Load-test seed complete.');
        $this->command?->line('Primary doctor: loadtest_dr_001 / password');
        $this->command?->line('Primary staff: loadtest_agent_001@example.com / password');
        $this->command?->newLine();

        foreach ($this->summary as $label => $count) {
            $this->command?->line(sprintf('%s: %d', str_replace('_', ' ', $label), $count));
        }

        $this->command?->newLine();
        $this->command?->line('Suggested smoke endpoints:');
        $this->command?->line('/api/doctor/patients?page=50');
        $this->command?->line('/api/doctor/results?page=100');
        $this->command?->line('/api/patients?page=100');
    }

    /**
     * @param  list<array<string, mixed>>  $rows
     */
    private function insertInChunks(string $table, array $rows, int $chunkSize = self::CHUNK_SIZE): void
    {
        if ($rows === []) {
            return;
        }

        foreach (array_chunk($rows, $chunkSize) as $chunk) {
            DB::table($table)->insert($chunk);
        }
    }
}
