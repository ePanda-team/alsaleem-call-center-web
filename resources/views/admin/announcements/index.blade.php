@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">{{ __('messages.announcements') }}</h1>
    <a href="{{ route('admin.announcements.create') }}" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.create') }}</a>
  </div>
  <ul class="space-y-2">
    @forelse($announcements as $item)
      <li class="border p-3 rounded-lg">
        <div class="font-semibold">{{ $item->title }}</div>
        <div class="text-sm text-gray-600 mt-1">{{ $item->body }}</div>
        
        <!-- Targeting Information -->
        <div class="mt-3 space-y-2">
          @if($item->target_specialties && count($item->target_specialties) > 0)
            <div class="flex items-center gap-2">
              <span class="text-xs font-medium text-gray-500">{{ __('messages.target_specialties') }}:</span>
              <div class="flex flex-wrap gap-1">
                @foreach($item->target_specialties as $specialty)
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">{{ $specialty }}</span>
                @endforeach
              </div>
            </div>
          @endif
          
          @if($item->target_experience_levels && count($item->target_experience_levels) > 0)
            <div class="flex items-center gap-2">
              <span class="text-xs font-medium text-gray-500">{{ __('messages.target_experience_levels') }}:</span>
              <div class="flex flex-wrap gap-1">
                @foreach($item->target_experience_levels as $level)
                  <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">{{ ucfirst($level) }}</span>
                @endforeach
              </div>
            </div>
          @endif
          
          @if($item->media_files && count($item->media_files) > 0)
            <div class="flex items-start gap-2">
              <span class="text-xs font-medium text-gray-500 mt-1">{{ __('messages.media') }}:</span>
              <div class="flex flex-wrap gap-2">
                @foreach($item->media_files as $media)
                  <div class="group relative">
                    @if(str_starts_with($media['type'], 'image/'))
                      <!-- Image Preview -->
                      <div class="w-16 h-16 rounded-lg overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer" onclick="openMediaModal('{{ asset('storage/' . $media['path']) }}', '{{ $media['name'] }}', 'image')">
                        <img src="{{ asset('storage/' . $media['path']) }}" alt="{{ $media['name'] }}" class="w-full h-full object-cover">
                      </div>
                    @elseif(str_starts_with($media['type'], 'video/'))
                      <!-- Video Preview -->
                      <div class="w-16 h-16 rounded-lg overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer bg-gray-100 flex items-center justify-center" onclick="openMediaModal('{{ asset('storage/' . $media['path']) }}', '{{ $media['name'] }}', 'video')">
                        <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    @elseif(str_starts_with($media['type'], 'audio/'))
                      <!-- Audio Preview -->
                      <div class="w-16 h-16 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer bg-gray-100 flex items-center justify-center" onclick="openMediaModal('{{ asset('storage/' . $media['path']) }}', '{{ $media['name'] }}', 'audio')">
                        <svg class="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 18V6l12-3v12l-12-3zM2 18h2V6H2v12zm3 0h2V6H5v12z"/>
                        </svg>
                      </div>
                    @else
                      <!-- Document Preview -->
                      <div class="w-16 h-16 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer bg-gray-100 flex flex-col items-center justify-center" onclick="openMediaModal('{{ asset('storage/' . $media['path']) }}', '{{ $media['name'] }}', 'document')">
                        <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span class="text-xs text-gray-600 mt-1">{{ strtoupper(pathinfo($media['name'], PATHINFO_EXTENSION)) }}</span>
                      </div>
                    @endif
                    <!-- File name tooltip -->
                    <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {{ $media['name'] }}
                    </div>
                  </div>
                @endforeach
              </div>
            </div>
          @endif
        </div>
        
        <div class="mt-2 flex items-center justify-between">
          <div class="flex gap-2">
            <a class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm" href="{{ route('admin.announcements.edit', $item) }}">{{ __('messages.edit') }}</a>
            <form action="{{ route('admin.announcements.destroy', $item) }}" method="post" class="inline">
              @csrf @method('delete')
              <button class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-sm" onclick="return confirm('{{ __('messages.confirm_delete') }}')">{{ __('messages.delete') }}</button>
            </form>
          </div>
          <button onclick="showViewers({{ $item->id }})" class="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm">
            {{ __('messages.view_viewers') }} ({{ $item->views_count ?? 0 }})
          </button>
        </div>
      </li>
    @empty
      <li class="border p-3 text-center text-gray-500 rounded-lg">{{ __('messages.no_announcements') }}</li>
    @endforelse
  </ul>
  {{ $announcements->links() }}

  <!-- Modal for showing viewers -->
  <div id="viewersModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">{{ __('messages.announcement_viewers') }}</h3>
        <button onclick="hideViewers()" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <div id="viewersList" class="space-y-2 max-h-64 overflow-y-auto">
        <!-- Viewers will be loaded here -->
      </div>
    </div>
  </div>

  <!-- Modal for media preview -->
  <div id="mediaModal" class="fixed inset-0 bg-black bg-opacity-75 hidden items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
      <div class="flex justify-between items-center mb-4">
        <h3 id="mediaTitle" class="text-lg font-semibold">{{ __('messages.media_preview') }}</h3>
        <button onclick="hideMediaModal()" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
      </div>
      <div id="mediaContent" class="flex items-center justify-center">
        <!-- Media content will be loaded here -->
      </div>
    </div>
  </div>

  <script>
    function showViewers(announcementId) {
      fetch(`/admin/announcements/${announcementId}/viewers`)
        .then(response => response.json())
        .then(data => {
          const viewersList = document.getElementById('viewersList');
          if (data.length === 0) {
            viewersList.innerHTML = '<p class="text-gray-500 text-center">{{ __("messages.no_viewers") }}</p>';
          } else {
            viewersList.innerHTML = data.map(viewer => `
              <div class="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <div>
                  <div class="font-medium">${viewer.doctor.name}</div>
                  <div class="text-sm text-gray-500">${viewer.doctor.speciality}</div>
                </div>
                <div class="text-xs text-gray-400">${new Date(viewer.viewed_at).toLocaleString()}</div>
              </div>
            `).join('');
          }
          document.getElementById('viewersModal').classList.remove('hidden');
          document.getElementById('viewersModal').classList.add('flex');
        })
        .catch(error => {
          console.error('Error loading viewers:', error);
          alert('{{ __("messages.error_loading_viewers") }}');
        });
    }

    function hideViewers() {
      document.getElementById('viewersModal').classList.add('hidden');
      document.getElementById('viewersModal').classList.remove('flex');
    }

    function openMediaModal(url, name, type) {
      const modal = document.getElementById('mediaModal');
      const title = document.getElementById('mediaTitle');
      const content = document.getElementById('mediaContent');
      
      title.textContent = name;
      
      if (type === 'image') {
        content.innerHTML = `<img src="${url}" alt="${name}" class="max-w-full max-h-[70vh] object-contain rounded">`;
      } else if (type === 'video') {
        content.innerHTML = `<video controls class="max-w-full max-h-[70vh] rounded">
          <source src="${url}" type="video/mp4">
          <source src="${url}" type="video/webm">
          <source src="${url}" type="video/ogg">
          Your browser does not support the video tag.
        </video>`;
      } else if (type === 'audio') {
        content.innerHTML = `
          <div class="text-center">
            <div class="mb-4">
              <svg class="w-16 h-16 text-purple-600 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 18V6l12-3v12l-12-3zM2 18h2V6H2v12zm3 0h2V6H5v12z"/>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-4">${name}</h4>
            <audio controls class="w-full max-w-md mx-auto">
              <source src="${url}" type="audio/mpeg">
              <source src="${url}" type="audio/wav">
              <source src="${url}" type="audio/ogg">
              <source src="${url}" type="audio/mp4">
              Your browser does not support the audio element.
            </audio>
          </div>
        `;
      } else {
        content.innerHTML = `
          <div class="text-center">
            <div class="mb-4">
              <svg class="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-2">${name}</h4>
            <p class="text-gray-600 mb-4">This file cannot be previewed in the browser.</p>
            <a href="${url}" target="_blank" class="inline-flex items-center px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded-lg transition-colors">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download File
            </a>
          </div>
        `;
      }
      
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function hideMediaModal() {
      const modal = document.getElementById('mediaModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  </script>
@endsection


