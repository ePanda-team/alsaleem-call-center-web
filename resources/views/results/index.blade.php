@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Test Results</h1>
    <a href="{{ route('results.create') }}" class="px-4 py-2 bg-black text-white rounded">Add</a>
  </div>
  <form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-5 gap-3">
    <input type="text" name="q" value="{{ request('q') }}" placeholder="Search patient/branch" class="border p-2 rounded" />
    <select name="doctor_id" class="border p-2 rounded">
      <option value="">All doctors</option>
      @foreach(\App\Models\Doctor::orderBy('name')->get() as $doc)
        <option value="{{ $doc->id }}" @selected(request('doctor_id')==$doc->id)>{{ $doc->name }} ({{ $doc->username }})</option>
      @endforeach
    </select>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-black text-white rounded">Filter</button>
      <a href="{{ route('results.index') }}" class="px-4 py-2 border rounded">Reset</a>
    </div>
  </form>
  <div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50 text-left text-gray-600">
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Patient</th>
          <th class="px-4 py-2">Branch</th>
          <th class="px-4 py-2">Doctor</th>
          <th class="px-4 py-2">PDF</th>
          <th class="px-4 py-2">Comment</th>
          <th class="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        @foreach($results as $result)
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ $result->id }}</td>
            <td class="px-4 py-2">{{ $result->patient_name }}</td>
            <td class="px-4 py-2">{{ $result->lab_branch }}</td>
            <td class="px-4 py-2">{{ $result->doctor->name }}</td>
            <td class="px-4 py-2"><a class="underline" href="{{ asset('storage/'.$result->pdf_path) }}" target="_blank">View</a></td>
            <td class="px-4 py-2">{{ $result->doctor_comment }}</td>
            <td class="px-4 py-2">
              <a class="underline" href="{{ route('results.edit', $result) }}">Edit</a>
              <form action="{{ route('results.destroy', $result) }}" method="post" class="inline">
                @csrf @method('delete')
                <button class="underline" onclick="return confirm('Delete?')">Delete</button>
              </form>
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
  </div>
  {{ $results->links() }}
@endsection


