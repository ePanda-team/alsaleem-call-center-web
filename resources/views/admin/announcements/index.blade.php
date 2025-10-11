@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Announcements</h1>
    <a href="{{ route('admin.announcements.create') }}" class="underline">Create</a>
  </div>
  <ul class="space-y-2">
    @forelse($announcements as $item)
      <li class="border p-3">
        <div class="font-semibold">{{ $item->title }}</div>
        <div class="text-sm">{{ $item->body }}</div>
        <a class="underline" href="{{ route('admin.announcements.edit', $item) }}">Edit</a>
        <form action="{{ route('admin.announcements.destroy', $item) }}" method="post" class="inline">
          @csrf @method('delete')
          <button class="underline" onclick="return confirm('Delete?')">Delete</button>
        </form>
      </li>
    @empty
      <li class="border p-3 text-center text-gray-500">No announcements found.</li>
    @endforelse
  </ul>
  {{ $announcements->links() }}
@endsection


