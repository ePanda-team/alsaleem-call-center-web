@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit Announcement</h1>
<form method="post" action="{{ route('admin.announcements.update', $announcement) }}" class="space-y-3">
    @csrf @method('put')
    <input name="title" placeholder="Title" class="border p-2 w-full" value="{{ old('title', $announcement->title) }}" />
    <textarea name="body" placeholder="Body" class="border p-2 w-full" rows="4">{{ old('body', $announcement->body) }}</textarea>
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


