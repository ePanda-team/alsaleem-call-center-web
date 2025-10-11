@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.edit_test_result') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('results.update', $result) }}" enctype="multipart/form-data" class="space-y-4">
      @csrf @method('put')
      <div>
        <label class="block text-sm mb-1">{{ __('messages.patient_name') }}</label>
        <input name="patient_name" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" value="{{ old('patient_name', $result->patient_name) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.lab_branch') }}</label>
        <select name="lab_branch" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]">
            <option value="">{{ __('messages.select_lab_branch') }}</option>
            @foreach($labBranches as $labBranch)
                <option value="{{ $labBranch->name }}" {{ old('lab_branch', $result->lab_branch) == $labBranch->name ? 'selected' : '' }}>
                    {{ $labBranch->name }}
                </option>
            @endforeach
        </select>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.doctor') }}</label>
        <select name="doctor_id" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]">
            <option value="">{{ __('messages.select_doctor') }}</option>
            @foreach($doctors as $doctor)
                <option value="{{ $doctor->id }}" {{ old('doctor_id', $result->doctor_id) == $doctor->id ? 'selected' : '' }}>
                    {{ $doctor->name }} ({{ $doctor->username }})
                </option>
            @endforeach
        </select>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.pdf_file') }}</label>
        <input type="file" name="pdf" accept=".pdf" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" />
        @if($result->pdf_path)
            <p class="mt-1 text-sm text-gray-600">{{ __('messages.current_file') }}: <a href="{{ asset('storage/' . $result->pdf_path) }}" target="_blank" class="text-blue-600 hover:underline">{{ basename($result->pdf_path) }}</a></p>
        @endif
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>
@endsection


