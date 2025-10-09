@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Edit User</h1>
<form method="post" action="{{ route('admin.users.update', $user) }}" class="space-y-3">
    @csrf @method('put')
    <input name="name" placeholder="Name" class="border p-2 w-full" value="{{ old('name', $user->name) }}" />
    <input name="email" placeholder="Email" class="border p-2 w-full" value="{{ old('email', $user->email) }}" />
    <input type="password" name="password" placeholder="New Password (optional)" class="border p-2 w-full" />
    <select name="role" class="border p-2 w-full">
        @foreach(['admin','supervisor','agent'] as $role)
          <option value="{{ $role }}" @selected($user->role === $role)>{{ $role }}</option>
        @endforeach
    </select>
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


