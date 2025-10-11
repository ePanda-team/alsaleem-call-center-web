@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.edit') }} {{ __('messages.lab_tests') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.lab-tests.update', $labTest) }}" class="space-y-4">
      @csrf @method('put')
      <div>
        <label class="block text-sm mb-1">{{ __('messages.name') }}</label>
        <input name="name" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" value="{{ old('name', $labTest->name) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.description') }}</label>
        <textarea name="description" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" rows="4">{{ old('description', $labTest->description) }}</textarea>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>
@endsection


