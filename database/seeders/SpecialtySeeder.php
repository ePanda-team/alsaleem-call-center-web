<?php

namespace Database\Seeders;

use App\Models\Specialty;
use Illuminate\Database\Seeder;

class SpecialtySeeder extends Seeder
{
    public function run(): void
    {
        $specialties = [
            ['name_en' => 'Cardiology', 'name_ar' => 'أمراض القلب'],
            ['name_en' => 'Dermatology', 'name_ar' => 'الأمراض الجلدية'],
            ['name_en' => 'Endocrinology', 'name_ar' => 'أمراض الغدد الصماء'],
            ['name_en' => 'Gastroenterology', 'name_ar' => 'أمراض الجهاز الهضمي'],
            ['name_en' => 'General Surgery', 'name_ar' => 'الجراحة العامة'],
            ['name_en' => 'Hematology', 'name_ar' => 'أمراض الدم'],
            ['name_en' => 'Infectious Disease', 'name_ar' => 'الأمراض المعدية'],
            ['name_en' => 'Nephrology', 'name_ar' => 'أمراض الكلى'],
            ['name_en' => 'Neurology', 'name_ar' => 'طب الأعصاب'],
            ['name_en' => 'Obstetrics & Gynecology', 'name_ar' => 'النساء والولادة'],
            ['name_en' => 'Oncology', 'name_ar' => 'الأورام'],
            ['name_en' => 'Ophthalmology', 'name_ar' => 'طب العيون'],
            ['name_en' => 'Orthopedics', 'name_ar' => 'جراحة العظام'],
            ['name_en' => 'Otolaryngology (ENT)', 'name_ar' => 'الأنف والأذن والحنجرة'],
            ['name_en' => 'Pediatrics', 'name_ar' => 'طب الأطفال'],
            ['name_en' => 'Psychiatry', 'name_ar' => 'الطب النفسي'],
            ['name_en' => 'Pulmonology', 'name_ar' => 'أمراض الصدر'],
            ['name_en' => 'Radiology', 'name_ar' => 'الأشعة'],
            ['name_en' => 'Rheumatology', 'name_ar' => 'أمراض الروماتيزم'],
            ['name_en' => 'Urology', 'name_ar' => 'المسالك البولية'],
        ];

        foreach ($specialties as $specialty) {
            Specialty::updateOrCreate(
                ['name_en' => $specialty['name_en']],
                ['name_ar' => $specialty['name_ar']]
            );
        }
    }
}

