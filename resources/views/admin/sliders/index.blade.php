@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Sliders</h1>
    <a href="{{ route('admin.sliders.create') }}" class="px-4 py-2 bg-black text-white rounded">Create</a>
  </div>
  <div class="grid grid-cols-3 gap-4">
    @forelse($sliders as $slider)
      <div class="border p-3">
        <img src="{{ asset('storage/'.$slider->image_path) }}" class="w-full h-40 object-cover" />
        <div class="mt-2">{{ $slider->title }}</div>
        <a class="underline" href="{{ route('admin.sliders.edit', $slider) }}">Edit</a>
        <form action="{{ route('admin.sliders.destroy', $slider) }}" method="post" class="inline">
          @csrf @method('delete')
          <button class="underline" onclick="return confirm('Delete?')">Delete</button>
        </form>
      </div>
    @empty
      <div class="col-span-3 text-center text-gray-500 border p-6">No sliders found.</div>
    @endforelse
  </div>
@endsection


