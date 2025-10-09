@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit Test Result</h1>
<form method="post" action="{{ route('results.update', $result) }}" enctype="multipart/form-data" class="space-y-3">
    @csrf @method('put')
    <input name="patient_name" placeholder="Patient Name" class="border p-2 w-full" value="{{ old('patient_name', $result->patient_name) }}" />
    <input name="lab_branch" placeholder="Lab Branch" class="border p-2 w-full" value="{{ old('lab_branch', $result->lab_branch) }}" />
    <select name="doctor_id" class="border p-2 w-full">
        @foreach($doctors as $doctor)
          <option value="{{ $doctor->id }}" @selected($result->doctor_id === $doctor->id)>{{ $doctor->name }} ({{ $doctor->username }})</option>
        @endforeach
    </select>
    <input type="file" name="pdf" class="border p-2 w-full" />
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


