@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Create Doctor</h1>
<form method="post" action="{{ route('admin.doctors.store') }}" class="space-y-3">
    @csrf
    <input name="name" placeholder="Name" class="border p-2 w-full" value="{{ old('name') }}" />
    <input name="username" placeholder="Username" class="border p-2 w-full" value="{{ old('username') }}" />
    <input name="speciality" placeholder="Speciality" class="border p-2 w-full" value="{{ old('speciality') }}" />
    <select name="experience_level" class="border p-2 w-full">
        <option value="junior">junior</option>
        <option value="senior">senior</option>
    </select>
    <input type="password" name="password" placeholder="Password" class="border p-2 w-full" />
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


