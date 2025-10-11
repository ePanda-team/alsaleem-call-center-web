@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.edit') }} {{ __('messages.doctors') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.doctors.update', $doctor) }}" class="space-y-4">
      @csrf @method('put')
      <div>
        <label class="block text-sm mb-1">{{ __('messages.name') }}</label>
        <input name="name" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('name', $doctor->name) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.username') }}</label>
        <input name="username" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('username', $doctor->username) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.speciality') }}</label>
        <select name="speciality" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]">
            <option value="">{{ __('messages.select_speciality') }}</option>
            @foreach($specialties as $specialty)
                <option value="{{ $specialty }}" {{ old('speciality', $doctor->speciality) === $specialty ? 'selected' : '' }}>{{ $specialty }}</option>
            @endforeach
        </select>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.experience_level') }}</label>
        <select name="experience_level" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            @foreach(['junior','senior'] as $level)
              <option value="{{ $level }}" @selected($doctor->experience_level === $level)>{{ $level }}</option>
            @endforeach
        </select>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.password') }}</label>
        <input type="password" name="password" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-black text-white rounded">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>
@endsection


