@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit User</h1>
<div class="max-w-2xl bg-white rounded-lg border border-gray-200 shadow p-6">
  <form method="post" action="{{ route('admin.users.update', $user) }}" class="space-y-4">
      @csrf @method('put')
      <div>
        <label class="block text-sm mb-1">Name</label>
        <input name="name" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('name', $user->name) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">Email</label>
        <input name="email" type="email" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('email', $user->email) }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">New Password (optional)</label>
        <input type="password" name="password" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label class="block text-sm mb-1">Role</label>
        <select name="role" class="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
            @foreach(['admin','supervisor','agent'] as $role)
              <option value="{{ $role }}" @selected($user->role === $role)>{{ $role }}</option>
            @endforeach
        </select>
      </div>
      <div class="pt-2">
        <button class="px-4 py-2 bg-black text-white rounded">Save</button>
      </div>
    </form>
</div>
@endsection


