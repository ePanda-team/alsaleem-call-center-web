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
  </script>
@endsection


