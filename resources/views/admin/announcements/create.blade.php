@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Create Announcement</h1>
<form method="post" action="{{ route('admin.announcements.store') }}" class="space-y-3">
    @csrf
    <input name="title" placeholder="Title" class="border p-2 w-full" value="{{ old('title') }}" />
    <textarea name="body" placeholder="Body" class="border p-2 w-full" rows="4">{{ old('body') }}</textarea>
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


