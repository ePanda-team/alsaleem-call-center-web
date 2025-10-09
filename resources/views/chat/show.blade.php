@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Chat with {{ $doctor->name }}</h1>
<div id="chat-app" data-conversation="{{ $conversation->id }}"></div>
@endsection


