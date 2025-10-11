@extends('layouts.app')

@section('content')
<div class="flex items-start justify-center w-full">
  <main class="flex max-w-5xl w-full gap-6">
    <div class="flex-1 bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">Chats</h2>
      <div class="grid grid-cols-3 gap-3 mb-4">
        <div class="rounded-lg border p-3 bg-gray-50">
          <div class="text-xs text-gray-500">Doctors</div>
          <div class="text-2xl font-semibold">{{ $doctorCount }}</div>
        </div>
        <div class="rounded-lg border p-3 bg-gray-50">
          <div class="text-xs text-gray-500">Results</div>
          <div class="text-2xl font-semibold">{{ $resultCount }}</div>
        </div>
        <div class="rounded-lg border p-3 bg-gray-50">
          <div class="text-xs text-gray-500">Active (last hour)</div>
          <div class="text-2xl font-semibold">{{ $activeDoctorsLastHour }}</div>
        </div>
      </div>
      <ul class="divide-y divide-gray-100">
        @foreach($conversations as $conversation)
          <li class="py-3 flex items-center justify-between">
            <div>
              <div class="font-medium flex items-center gap-2">
                {{ $conversation->doctor?->name ?? 'Unknown Doctor' }}
                @php $unread = $conversation->unread_doctor_count ?? ($conversation->unseen_count ?? 0); @endphp
                @if(($unread) > 0)
                  <span class="text-xs bg-red-600 text-white rounded-full px-2 py-0.5">{{ $unread }}</span>
                @endif
              </div>
              <div class="text-sm text-gray-500">Last: {{ ($conversation->last_message_preview ?? $conversation->last_message_body) ? Str::limit(($conversation->last_message_preview ?? $conversation->last_message_body), 50) : '—' }} • {{ optional($conversation->last_message_at)->diffForHumans() ?? 'No messages' }}</div>
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


