@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Users</h1>
    <a href="{{ route('admin.users.create') }}" class="underline">Create</a>
  </div>
  <table class="w-full">
    <thead>
      <tr>
        <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th></th>
      </tr>
    </thead>
    <tbody>
      @foreach($users as $user)
        <tr>
          <td>{{ $user->id }}</td>
          <td>{{ $user->name }}</td>
          <td>{{ $user->email }}</td>
          <td>{{ $user->role }}</td>
          <td>
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
  {{ $users->links() }}
@endsection


