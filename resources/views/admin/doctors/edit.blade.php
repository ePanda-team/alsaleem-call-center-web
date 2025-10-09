@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit Doctor</h1>
<form method="post" action="{{ route('admin.doctors.update', $doctor) }}" class="space-y-3">
    @csrf @method('put')
    <input name="name" placeholder="Name" class="border p-2 w-full" value="{{ old('name', $doctor->name) }}" />
    <input name="username" placeholder="Username" class="border p-2 w-full" value="{{ old('username', $doctor->username) }}" />
    <input name="speciality" placeholder="Speciality" class="border p-2 w-full" value="{{ old('speciality', $doctor->speciality) }}" />
    <select name="experience_level" class="border p-2 w-full">
        @foreach(['junior','senior'] as $level)
          <option value="{{ $level }}" @selected($doctor->experience_level === $level)>{{ $level }}</option>
        @endforeach
    </select>
    <input type="password" name="password" placeholder="New Password (optional)" class="border p-2 w-full" />
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


