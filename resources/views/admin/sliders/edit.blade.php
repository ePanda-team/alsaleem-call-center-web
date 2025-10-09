@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit Slider</h1>
<form method="post" action="{{ route('admin.sliders.update', $slider) }}" enctype="multipart/form-data" class="space-y-3">
    @csrf @method('put')
    <input name="title" placeholder="Title" class="border p-2 w-full" value="{{ old('title', $slider->title) }}" />
    <input type="file" name="image" class="border p-2 w-full" />
    <input type="number" name="position" placeholder="Position" class="border p-2 w-full" value="{{ old('position', $slider->position) }}" />
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


