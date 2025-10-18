@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.edit') }} {{ __('messages.announcements') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.announcements.update', $announcement) }}" enctype="multipart/form-data" class="space-y-4">
      @csrf @method('put')
      <div>
        <label class="block text-sm mb-1">{{ __('messages.title') }}</label>
        <input name="title" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" value="{{ old('title', $announcement->title) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.body') }}</label>
        <textarea name="body" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" rows="4">{{ old('body', $announcement->body) }}</textarea>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.target_specialties') }}</label>
        <div class="border rounded px-3 py-2 bg-gray-50 max-h-40 overflow-y-auto">
          <div class="grid grid-cols-2 gap-2">
            @foreach(\App\Models\Doctor::getSpecialties() as $specialty)
              <label class="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-1 rounded">
                <input type="checkbox" name="target_specialties[]" value="{{ $specialty }}" 
                       {{ in_array($specialty, old('target_specialties', $announcement->target_specialties ?? [])) ? 'checked' : '' }}
                       class="rounded border-gray-300 text-[#FE0003] focus:ring-[#FE0003] focus:ring-2">
                <span class="text-sm">{{ $specialty }}</span>
              </label>
            @endforeach
          </div>
        </div>
        <p class="text-xs text-gray-500 mt-1">{{ __('messages.target_specialties_help') }}</p>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.target_experience_levels') }}</label>
        <div class="space-y-2">
            <label class="flex items-center">
                <input type="checkbox" name="target_experience_levels[]" value="junior" class="mr-2" {{ in_array('junior', old('target_experience_levels', $announcement->target_experience_levels ?? [])) ? 'checked' : '' }} />
                {{ __('messages.junior') }}
            </label>
            <label class="flex items-center">
                <input type="checkbox" name="target_experience_levels[]" value="senior" class="mr-2" {{ in_array('senior', old('target_experience_levels', $announcement->target_experience_levels ?? [])) ? 'checked' : '' }} />
                {{ __('messages.senior') }}
            </label>
        </div>
        <p class="text-xs text-gray-500 mt-1">{{ __('messages.target_experience_help') }}</p>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.media') }}</label>
        <input type="file" name="media[]" multiple accept="image/*,video/*,audio/*,.pdf,.doc,.docx,.txt" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" id="mediaInput" />
        <p class="text-xs text-red-500 mt-1">⚠️ <strong>Note:</strong> Current server limit is 2MB per file. Video files larger than 2MB will be rejected.</p>
        <div id="filePreview" class="mt-2 hidden">
          <div class="text-sm text-gray-600">Selected files:</div>
          <div id="fileList" class="space-y-1"></div>
        </div>
        @if($announcement->media_files && count($announcement->media_files) > 0)
            <div class="mt-2">
                <p class="text-sm font-medium text-gray-600 mb-2">{{ __('messages.current_media') }}:</p>
                <div class="grid grid-cols-2 gap-2">
                    @foreach($announcement->media_files as $media)
                        <div class="flex items-center justify-between p-2 bg-gray-50 rounded border">
                            <a href="{{ asset('storage/' . $media['path']) }}" target="_blank" class="text-blue-600 hover:underline text-sm">{{ $media['name'] }}</a>
                            <span class="text-xs text-gray-500">{{ round($media['size'] / 1024, 1) }}KB</span>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif
        <p class="text-xs text-gray-500 mt-1">{{ __('messages.media_help') }} - {{ __('messages.multiple_files_allowed') }}</p>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const mediaInput = document.getElementById('mediaInput');
    const filePreview = document.getElementById('filePreview');
    const fileList = document.getElementById('fileList');
    const form = document.querySelector('form');
    
    // Check file sizes when files are selected
    mediaInput.addEventListener('change', function() {
        const files = Array.from(this.files);
        const maxSize = 2 * 1024 * 1024; // 2MB in bytes
        let hasLargeFiles = false;
        
        fileList.innerHTML = '';
        
        files.forEach((file, index) => {
            const fileSize = file.size;
            const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
            const isLarge = fileSize > maxSize;
            
            if (isLarge) hasLargeFiles = true;
            
            const fileItem = document.createElement('div');
            fileItem.className = `text-xs p-2 rounded ${isLarge ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`;
            fileItem.innerHTML = `
                <div class="flex justify-between items-center">
                    <span>${file.name}</span>
                    <span>${fileSizeMB}MB</span>
                </div>
                ${isLarge ? '<div class="text-red-600 font-medium">⚠️ File too large (max 2MB)</div>' : ''}
            `;
            fileList.appendChild(fileItem);
        });
        
        if (files.length > 0) {
            filePreview.classList.remove('hidden');
        } else {
            filePreview.classList.add('hidden');
        }
        
        if (hasLargeFiles) {
            // Disable form submission if there are large files
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Remove large files to continue';
                submitBtn.className = 'px-4 py-2 bg-gray-400 text-white rounded font-medium cursor-not-allowed';
            }
        } else {
            // Enable form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = '{{ __("messages.save") }}';
                submitBtn.className = 'px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200';
            }
        }
    });
    
    // Prevent form submission if there are large files
    form.addEventListener('submit', function(e) {
        const files = Array.from(mediaInput.files);
        const maxSize = 2 * 1024 * 1024; // 2MB in bytes
        const largeFiles = files.filter(file => file.size > maxSize);
        
        if (largeFiles.length > 0) {
            e.preventDefault();
            alert('Please remove files larger than 2MB before submitting. Current server limit is 2MB per file.');
            return false;
        }
    });
});
</script>
@endsection


