@extends('layouts.app')

@section('content')
<div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ __('messages.edit_test_result') }}</h1>

            <form method="post" action="{{ route('results.update', $result) }}" enctype="multipart/form-data">
                @csrf @method('put')
                
                <div class="mb-4">
                    <label for="patient_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ __('messages.patient_name') }} <span class="text-red-500">*</span></label>
                    <input type="text" id="patient_name" name="patient_name" value="{{ old('patient_name', $result->patient_name) }}" required
                           class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 @error('patient_name') border-red-500 @enderror">
                    @error('patient_name')
                        <p class="mt-1 text-sm text-red-600 dark:text-red-400">{{ $message }}</p>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="lab_branch" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ __('messages.lab_branch') }} <span class="text-red-500">*</span></label>
                    <select id="lab_branch" name="lab_branch" required
                            class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 @error('lab_branch') border-red-500 @enderror">
                        <option value="">{{ __('messages.select_lab_branch') }}</option>
                        @foreach($labBranches as $labBranch)
                            <option value="{{ $labBranch->name }}" {{ old('lab_branch', $result->lab_branch) == $labBranch->name ? 'selected' : '' }}>
                                {{ $labBranch->name }}
                            </option>
                        @endforeach
                    </select>
                    @error('lab_branch')
                        <p class="mt-1 text-sm text-red-600 dark:text-red-400">{{ $message }}</p>
                    @enderror
                </div>

                <div class="mb-4">
                    <label for="doctor_id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ __('messages.doctor') }} <span class="text-red-500">*</span></label>
                    <select id="doctor_id" name="doctor_id" required
                            class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 @error('doctor_id') border-red-500 @enderror">
                        <option value="">{{ __('messages.select_doctor') }}</option>
                        @foreach($doctors as $doctor)
                            <option value="{{ $doctor->id }}" {{ old('doctor_id', $result->doctor_id) == $doctor->id ? 'selected' : '' }}>
                                {{ $doctor->name }} ({{ $doctor->username }})
                            </option>
                        @endforeach
                    </select>
                    @error('doctor_id')
                        <p class="mt-1 text-sm text-red-600 dark:text-red-400">{{ $message }}</p>
                    @enderror
                </div>

                <div class="mb-6">
                    <label for="pdf" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ __('messages.pdf_file') }}</label>
                    <input type="file" id="pdf" name="pdf" accept=".pdf"
                           class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 @error('pdf') border-red-500 @enderror">
                    @if($result->pdf_path)
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ __('messages.current_file') }}: <a href="{{ asset('storage/' . $result->pdf_path) }}" target="_blank" class="text-blue-600 hover:underline">{{ basename($result->pdf_path) }}</a></p>
                    @endif
                    @error('pdf')
                        <p class="mt-1 text-sm text-red-600 dark:text-red-400">{{ $message }}</p>
                    @enderror
                </div>

                <div class="flex justify-end space-x-3">
                    <a href="{{ route('results.index') }}" class="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        {{ __('messages.cancel') }}
                    </a>
                    <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {{ __('messages.update') }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection


