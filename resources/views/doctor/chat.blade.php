@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Chat</h1>
<div id="chat-app" data-title="Chat" data-conversation="{{ $conversation->id }}"></div>
@endsection


