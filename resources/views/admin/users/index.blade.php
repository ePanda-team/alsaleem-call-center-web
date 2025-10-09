@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Users</h1>
    <a href="{{ route('admin.users.create') }}" class="px-4 py-2 bg-black text-white rounded">Create</a>
  </div>
  <form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3">
    <input type="text" name="q" value="{{ request('q') }}" placeholder="Search name/email" class="border p-2 rounded" />
    <select name="role" class="border p-2 rounded">
      <option value="">All roles</option>
      @foreach(['admin','supervisor','agent'] as $r)
        <option value="{{ $r }}" @selected(request('role')===$r)>{{ $r }}</option>
      @endforeach
    </select>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-black text-white rounded">Filter</button>
      <a href="{{ route('admin.users.index') }}" class="px-4 py-2 border rounded">Reset</a>
    </div>
  </form>
  <div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50 text-left text-gray-600">
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        @foreach($users as $user)
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ $user->id }}</td>
            <td class="px-4 py-2">{{ $user->name }}</td>
            <td class="px-4 py-2">{{ $user->email }}</td>
            <td class="px-4 py-2">{{ $user->role }}</td>
            <td class="px-4 py-2">
              <a class="underline" href="{{ route('admin.users.edit', $user) }}">Edit</a>
              <form action="{{ route('admin.users.destroy', $user) }}" method="post" class="inline">
                @csrf @method('delete')
                <button class="underline" onclick="return confirm('Delete?')">Delete</button>
              </form>
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
  </div>
  {{ $users->links() }}
@endsection


