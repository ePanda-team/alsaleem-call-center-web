@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.create') }} {{ __('messages.lab_branches') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.lab-branches.store') }}" class="space-y-4">
      @csrf
      <div>
        <label class="block text-sm mb-1">{{ __('messages.name') }}</label>
        <input name="name" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" value="{{ old('name') }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.address') }}</label>
        <textarea name="address" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" rows="3">{{ old('address') }}</textarea>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.phone') }}</label>
        <input name="phone" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]" value="{{ old('phone') }}" />
      </div>
      <div>
        <label class="inline-flex items-center space-x-2">
          <input type="checkbox" name="is_active" value="1" {{ old('is_active', true) ? 'checked' : '' }} class="rounded border-gray-300 text-[#FE0003] focus:ring-[#FE0003]" />
          <span class="text-sm">{{ __('messages.active') }}</span>
        </label>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>
@endsection
