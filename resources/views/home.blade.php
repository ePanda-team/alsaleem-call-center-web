@extends('layouts.app')

@section('content')
<div class="flex items-start justify-center w-full">
  <main class="flex max-w-4xl w-full gap-6">
    <div class="flex-1 bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Chats</h2>
      <ul class="divide-y divide-gray-100">
        @foreach($conversations as $conversation)
          <li class="py-3 flex items-center justify-between">
            <div>
              <div class="font-medium">{{ $conversation->doctor?->name ?? 'Unknown Doctor' }}</div>
              <div class="text-sm text-gray-500">Last activity: {{ optional($conversation->last_message_at)->diffForHumans() ?? 'No messages' }}</div>
            </div>
            @if($conversation->doctor)
              <a class="underline" href="{{ route('chat.show', $conversation->doctor) }}">Open</a>
            @endif
          </li>
        @endforeach
      </ul>
    </div>
    <div class="w-80 bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Sliders</h2>
      <div class="space-y-3">
        @foreach(($sliders ?? []) as $s)
          <div>
            <img class="rounded" src="{{ asset('storage/'.$s->image_path) }}" alt="{{ $s->title }}" />
            @if($s->title)
              <div class="text-sm text-gray-600 mt-1">{{ $s->title }}</div>
            @endif
          </div>
        @endforeach
      </div>
    </div>
  </main>
</div>
@endsection


