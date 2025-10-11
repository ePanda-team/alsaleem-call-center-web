@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Create Slider</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.sliders.store') }}" enctype="multipart/form-data" class="space-y-4">
      @csrf
      <div>
        <label class="block text-sm mb-1">Title</label>
        <input name="title" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('title') }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">Image</label>
        <input type="file" name="image" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label class="block text-sm mb-1">Position</label>
        <input type="number" name="position" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('position', 0) }}" />
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-black text-white rounded">Save</button>
      </div>
    </form>
</div>
@endsection


