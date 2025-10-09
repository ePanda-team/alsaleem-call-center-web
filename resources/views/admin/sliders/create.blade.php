@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Create Slider</h1>
<form method="post" action="{{ route('admin.sliders.store') }}" enctype="multipart/form-data" class="space-y-3">
    @csrf
    <input name="title" placeholder="Title" class="border p-2 w-full" value="{{ old('title') }}" />
    <input type="file" name="image" class="border p-2 w-full" />
    <input type="number" name="position" placeholder="Position" class="border p-2 w-full" value="{{ old('position', 0) }}" />
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


