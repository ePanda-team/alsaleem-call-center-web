@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">{{ __('messages.edit') }} {{ __('messages.users') }}</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.users.update', $user) }}" class="space-y-4">
      @csrf @method('put')
      <div>
        <label class="block text-sm mb-1">{{ __('messages.name') }}</label>
        <input name="name" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('name', $user->name) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.email') }}</label>
        <input name="email" type="email" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('email', $user->email) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.password') }}</label>
        <input type="password" name="password" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.role') }}</label>
        <select name="role" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]">
            @foreach(['admin','supervisor','agent'] as $role)
              <option value="{{ $role }}" @selected($user->role === $role)>{{ $role }}</option>
            @endforeach
        </select>
      </div>
      <div>
        <label class="block text-sm mb-1">{{ __('messages.branch_assignment') }}</label>
        <select name="branch_assignment" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FE0003]">
            <option value="">{{ __('messages.select_lab_branch') }}</option>
            @foreach(\App\Models\LabBranch::where('is_active', true)->get() as $branch)
                <option value="{{ $branch->name }}" {{ old('branch_assignment', $user->branch_assignment) == $branch->name ? 'selected' : '' }}>{{ $branch->name }}</option>
            @endforeach
        </select>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-black text-white rounded">{{ __('messages.save') }}</button>
      </div>
    </form>
</div>
@endsection


