@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">{{ __('messages.sliders') }}</h1>
    <a href="{{ route('admin.sliders.create') }}" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.create') }}</a>
  </div>
  <div class="grid grid-cols-3 gap-4">
    @forelse($sliders as $slider)
      <div class="border p-3 rounded-lg">
        <img src="{{ asset('storage/'.$slider->image_path) }}" class="w-full h-40 object-cover rounded" />
        <div class="mt-2 font-medium">{{ $slider->title }}</div>
        <div class="mt-2 flex gap-2">
          <a class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm" href="{{ route('admin.sliders.edit', $slider) }}">{{ __('messages.edit') }}</a>
          <form action="{{ route('admin.sliders.destroy', $slider) }}" method="post" class="inline">
            @csrf @method('delete')
            <button class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-sm" onclick="return confirm('{{ __('messages.confirm_delete') }}')">{{ __('messages.delete') }}</button>
          </form>
        </div>
      </div>
    @empty
      <div class="col-span-3 text-center text-gray-500 border p-6 rounded-lg">{{ __('messages.no_sliders') }}</div>
    @endforelse
  </div>
@endsection


