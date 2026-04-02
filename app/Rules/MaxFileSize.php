<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class MaxFileSize implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! $value) {
            return; // Allow empty files
        }

        // Check if file size is within limit (50MB)
        $maxSize = 50 * 1024 * 1024;
        if ($value->getSize() > $maxSize) {
            $fail('The :attribute file is too large. Maximum size allowed is 50MB.');
        }
    }
}
