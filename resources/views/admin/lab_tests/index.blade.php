@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Lab Tests</h1>
    <a href="{{ route('admin.lab-tests.create') }}" class="px-4 py-2 bg-black text-white rounded">Create</a>
  </div>
  <form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3">
    <input type="text" name="q" value="{{ request('q') }}" placeholder="Search name" class="border p-2 rounded" />
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-black text-white rounded">Filter</button>
      <a href="{{ route('admin.lab-tests.index') }}" class="px-4 py-2 border rounded">Reset</a>
    </div>
  </form>
  <div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50 text-left text-gray-600">
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        @forelse($labTests as $t)
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ $t->id }}</td>
            <td class="px-4 py-2">{{ $t->name }}</td>
            <td class="px-4 py-2">{{ Str::limit($t->description, 80) }}</td>
            <td class="px-4 py-2">
              <a class="underline" href="{{ route('admin.lab-tests.edit', $t) }}">Edit</a>
              <form action="{{ route('admin.lab-tests.destroy', $t) }}" method="post" class="inline">
                @csrf @method('delete')
                <button class="underline" onclick="return confirm('Delete?')">Delete</button>
              </form>
            </td>
          </tr>
        @empty
          <tr>
            <td colspan="4" class="px-4 py-6 text-center text-gray-500">No lab tests found.</td>
          </tr>
        @endforelse
      </tbody>
    </table>
  </div>
  {{ $labTests->links() }}
@endsection


