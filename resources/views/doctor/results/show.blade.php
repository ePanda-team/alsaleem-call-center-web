@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Result #{{ $result->id }}</h1>
<div class="space-y-2 mb-4">
  <div><strong>Patient:</strong> {{ $result->patient_name }}</div>
  <div><strong>Branch:</strong> {{ $result->lab_branch }}</div>
  <div><a class="underline" href="{{ asset('storage/'.$result->pdf_path) }}" target="_blank">Open PDF</a></div>
</div>

<form method="post" action="{{ route('doctor.results.comment', $result) }}" class="space-y-3">
  @csrf
  <textarea name="doctor_comment" placeholder="Write comment" class="border p-2 w-full" rows="4">{{ old('doctor_comment', $result->doctor_comment) }}</textarea>
  <button class="px-4 py-2 bg-black text-white">Save Comment</button>
</form>
@endsection


