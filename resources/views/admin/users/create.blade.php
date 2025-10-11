@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.create') }} {{ __('messages.users') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.users.store') }}" class="space-y-4">
      @csrf
      <div>
        <label class="block text-sm mb-1">{{ __('messages.name') }}</label>
        <input name="name" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('name') }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.email') }}</label>
        <input name="email" type="email" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('email') }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.password') }}</label>
        <input type="password" name="password" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.role') }}</label>
        <select name="role" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="admin">admin</option>
            <option value="supervisor">supervisor</option>
            <option value="agent" selected>agent</option>
        </select>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-black text-white rounded">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>
@endsection


