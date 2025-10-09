@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Create User</h1>
<form method="post" action="{{ route('admin.users.store') }}" class="space-y-3">
    @csrf
    <input name="name" placeholder="Name" class="border p-2 w-full" value="{{ old('name') }}" />
    <input name="email" placeholder="Email" class="border p-2 w-full" value="{{ old('email') }}" />
    <input type="password" name="password" placeholder="Password" class="border p-2 w-full" />
    <select name="role" class="border p-2 w-full">
        <option value="admin">admin</option>
        <option value="supervisor">supervisor</option>
        <option value="agent" selected>agent</option>
    </select>
    <button class="px-4 py-2 bg-black text-white">Save</button>
  </form>
@endsection


