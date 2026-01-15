<?php

use Illuminate\Database\Migrations\Migration;
use App\Models\Announcement;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Get all announcements
        $announcements = Announcement::all();

        foreach ($announcements as $announcement) {
            $levels = $announcement->target_experience_levels ?? [];
            
            // Skip if empty or null
            if (empty($levels) || !is_array($levels)) {
                continue;
            }
            
            // Map old values to new values
            $updatedLevels = [];
            $hasChanges = false;
            
            foreach ($levels as $level) {
                if ($level === 'junior') {
                    $updatedLevels[] = 'specialist';
                    $hasChanges = true;
                } elseif ($level === 'senior') {
                    $updatedLevels[] = 'doctor';
                    $hasChanges = true;
                } else {
                    // Keep existing values that are already in the new format
                    $updatedLevels[] = $level;
                }
            }
            
            // Only update if there were changes
            if ($hasChanges) {
                // Remove duplicates and update
                $updatedLevels = array_values(array_unique($updatedLevels));
                
                // Update the announcement
                $announcement->update([
                    'target_experience_levels' => $updatedLevels
                ]);
            }
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Get all announcements
        $announcements = Announcement::all();

        foreach ($announcements as $announcement) {
            $levels = $announcement->target_experience_levels ?? [];
            
            // Skip if empty or null
            if (empty($levels) || !is_array($levels)) {
                continue;
            }
            
            // Map new values back to old values
            $updatedLevels = [];
            $hasChanges = false;
            
            foreach ($levels as $level) {
                if ($level === 'specialist') {
                    $updatedLevels[] = 'junior';
                    $hasChanges = true;
                } elseif ($level === 'doctor') {
                    $updatedLevels[] = 'senior';
                    $hasChanges = true;
                } elseif ($level === 'Consultant') {
                    // Consultant didn't exist in old system, map to junior
                    $updatedLevels[] = 'junior';
                    $hasChanges = true;
                } else {
                    // Keep existing values
                    $updatedLevels[] = $level;
                }
            }
            
            // Only update if there were changes
            if ($hasChanges) {
                // Remove duplicates and update
                $updatedLevels = array_values(array_unique($updatedLevels));
                
                // Update the announcement
                $announcement->update([
                    'target_experience_levels' => $updatedLevels
                ]);
            }
        }
    }
};
