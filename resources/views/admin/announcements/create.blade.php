@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.create') }} {{ __('messages.announcements') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.announcements.store') }}" class="space-y-4">
      @csrf
      <div>
        <label class="block text-sm mb-1">{{ __('messages.title') }}</label>
        <input name="title" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" value="{{ old('title') }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.body') }}</label>
        <textarea name="body" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" rows="4">{{ old('body') }}</textarea>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>
@endsection


