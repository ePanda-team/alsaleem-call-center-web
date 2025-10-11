@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit Lab Test</h1>
<form method="post" action="{{ route('admin.lab-tests.update', $labTest) }}" class="space-y-3">
    @csrf @method('put')
    <input name="name" placeholder="Name" class="border p-2 w-full" value="{{ old('name', $labTest->name) }}" />
    <textarea name="description" placeholder="Description" class="border p-2 w-full" rows="4">{{ old('description', $labTest->description) }}</textarea>
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


