@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Doctor Dashboard</h1>
<p>Welcome, {{ auth('doctor')->user()->name }}.</p>
<a class="underline" href="{{ route('doctor.chat') }}">Open Chat</a>
@endsection


