@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit Announcement</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.announcements.update', $announcement) }}" class="space-y-4">
      @csrf @method('put')
      <div>
        <label class="block text-sm mb-1">Title</label>
        <input name="title" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('title', $announcement->title) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">Body</label>
        <textarea name="body" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4">{{ old('body', $announcement->body) }}</textarea>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-black text-white rounded">Save</button>
      </div>
    </form>
</div>
@endsection


