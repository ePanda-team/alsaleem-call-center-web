@extends('layouts.app')

@section('content')
<div class="space-y-6">
  <!-- Statistics Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="text-sm text-gray-500 mb-1">{{ __('messages.doctors_count') }}</div>
      <div class="text-3xl font-bold text-blue-600">{{ $doctorCount }}</div>
    </div>
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="text-sm text-gray-500 mb-1">{{ __('messages.results_count') }}</div>
      <div class="text-3xl font-bold text-green-600">{{ $resultCount }}</div>
    </div>
    <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
      <div class="text-sm text-gray-500 mb-1">{{ __('messages.active_last_hour') }}</div>
      <div class="text-3xl font-bold text-orange-600">{{ $activeDoctorsLastHour }}</div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Chats Section -->
    <div class="lg:col-span-2 bg-white rounded-lg shadow border border-gray-200 p-6">
      <h2 class="text-xl font-semibold mb-4">{{ __('messages.chats') }}</h2>
      <ul class="divide-y divide-gray-100">
        @foreach($conversations as $conversation)
          <li class="py-3 flex items-center justify-between">
            <div>
              <div class="font-medium flex items-center gap-2">
                {{ $conversation->doctor?->name ?? __('messages.doctor') }}
                @php $unread = $conversation->unread_doctor_count ?? ($conversation->unseen_count ?? 0); @endphp
                @if(($unread) > 0)
                  <span class="text-xs bg-red-600 text-white rounded-full px-2 py-0.5">{{ $unread }}</span>
                @endif
              </div>
              <div class="text-sm text-gray-500">{{ __('messages.last') }}: {{ ($conversation->last_message_preview ?? $conversation->last_message_body) ? Str::limit(($conversation->last_message_preview ?? $conversation->last_message_body), 50) : '—' }} • {{ optional($conversation->last_message_at)->diffForHumans() ?? __('messages.no_messages') }}</div>
            </div>
            @if($conversation->doctor)
              <a class="px-3 py-1 bg-[#FE0003] hover:bg-red-700 text-white rounded text-sm font-medium transition-all duration-200" href="{{ route('chat.show', $conversation->doctor) }}">{{ __('messages.open') }}</a>
            @endif
          </li>
        @endforeach
      </ul>
    </div>

    <!-- Right Sidebar -->
    <div class="space-y-6">
      <!-- Sliders -->
      <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">{{ __('messages.sliders') }}</h2>
        <div class="space-y-3">
          @foreach(($sliders ?? []) as $s)
            <div>
              <img class="rounded w-full h-32 object-cover" src="{{ asset('storage/'.$s->image_path) }}" alt="{{ $s->title }}" />
              @if($s->title)
                <div class="text-sm text-gray-600 mt-1">{{ $s->title }}</div>
              @endif
            </div>
          @endforeach
        </div>
      </div>

      <!-- Last Active Doctors -->
      <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">{{ __('messages.last_active_doctors') }}</h2>
        <ul class="space-y-2">
          @foreach($lastActiveDoctors as $doctor)
            <li class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div>
                <div class="font-medium">{{ $doctor->name }}</div>
                <div class="text-sm text-gray-500">{{ $doctor->speciality }}</div>
              </div>
              <div class="text-xs text-gray-400">{{ $doctor->conversation?->last_message_at?->diffForHumans() ?? '—' }}</div>
            </li>
          @endforeach
        </ul>
      </div>

      <!-- Last Results -->
      <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">{{ __('messages.last_results') }}</h2>
        <ul class="space-y-2">
          @foreach($lastResults as $result)
            <li class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div>
                <div class="font-medium">{{ $result->patient_name }}</div>
                <div class="text-sm text-gray-500">{{ $result->lab_branch }}</div>
              </div>
              <div class="text-xs text-gray-400">{{ $result->created_at->diffForHumans() }}</div>
            </li>
          @endforeach
        </ul>
      </div>

      <!-- Branch Ranking -->
      <div class="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h2 class="text-xl font-semibold mb-4">{{ __('messages.branch_ranking') }}</h2>
        <ul class="space-y-2">
          @foreach($branchRanking as $index => $branch)
            <li class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">{{ $index + 1 }}</span>
                <span class="font-medium">{{ $branch->lab_branch }}</span>
              </div>
              <div class="text-sm text-gray-500">{{ $branch->result_count }} {{ __('messages.results') }}</div>
            </li>
          @endforeach
        </ul>
      </div>
    </div>
  </div>
</div>
@endsection


