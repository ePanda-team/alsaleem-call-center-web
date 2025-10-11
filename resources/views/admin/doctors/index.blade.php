@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Doctors</h1>
    <a href="{{ route('admin.doctors.create') }}" class="px-4 py-2 bg-black text-white rounded">Create</a>
  </div>
  <form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3">
    <input type="text" name="q" value="{{ request('q') }}" placeholder="Search name/username/speciality" class="border p-2 rounded" />
    <select name="experience" class="border p-2 rounded">
      <option value="">All levels</option>
      @foreach(['junior','senior'] as $lvl)
        <option value="{{ $lvl }}" @selected(request('experience')===$lvl)>{{ $lvl }}</option>
      @endforeach
    </select>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-black text-white rounded">Filter</button>
      <a href="{{ route('admin.doctors.index') }}" class="px-4 py-2 border rounded">Reset</a>
    </div>
  </form>
  <div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50 text-left text-gray-600">
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Username</th>
          <th class="px-4 py-2">Speciality</th>
          <th class="px-4 py-2">Experience</th>
          <th class="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        @foreach($doctors as $doctor)
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ $doctor->id }}</td>
            <td class="px-4 py-2">{{ $doctor->name }}</td>
            <td class="px-4 py-2">{{ $doctor->username }}</td>
            <td class="px-4 py-2">{{ $doctor->speciality }}</td>
            <td class="px-4 py-2">{{ $doctor->experience_level }}</td>
            <td class="px-4 py-2">
              <a class="px-3 py-1.5 border rounded mr-2" href="{{ route('admin.doctors.edit', $doctor) }}">Edit</a>
              <form action="{{ route('admin.doctors.destroy', $doctor) }}" method="post" class="inline">
                @csrf @method('delete')
                <button class="px-3 py-1.5 border rounded" onclick="return confirm('Delete?')">Delete</button>
              </form>
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
  </div>
  {{ $doctors->links() }}
@endsection


