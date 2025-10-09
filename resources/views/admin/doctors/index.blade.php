@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Doctors</h1>
    <a href="{{ route('admin.doctors.create') }}" class="underline">Create</a>
  </div>
  <table class="w-full">
    <thead>
      <tr>
        <th>ID</th><th>Name</th><th>Username</th><th>Speciality</th><th>Experience</th><th></th>
      </tr>
    </thead>
    <tbody>
      @foreach($doctors as $doctor)
        <tr>
          <td>{{ $doctor->id }}</td>
          <td>{{ $doctor->name }}</td>
          <td>{{ $doctor->username }}</td>
          <td>{{ $doctor->speciality }}</td>
          <td>{{ $doctor->experience_level }}</td>
          <td>
            <a class="underline" href="{{ route('admin.doctors.edit', $doctor) }}">Edit</a>
            <form action="{{ route('admin.doctors.destroy', $doctor) }}" method="post" class="inline">
              @csrf @method('delete')
              <button class="underline" onclick="return confirm('Delete?')">Delete</button>
            </form>
          </td>
        </tr>
      @endforeach
    </tbody>
  </table>
  {{ $doctors->links() }}
@endsection


