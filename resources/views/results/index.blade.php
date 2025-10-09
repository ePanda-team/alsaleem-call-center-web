@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">Test Results</h1>
    <a href="{{ route('results.create') }}" class="underline">Add</a>
  </div>
  <table class="w-full">
    <thead>
      <tr>
        <th>ID</th><th>Patient</th><th>Branch</th><th>Doctor</th><th>PDF</th><th>Comment</th><th></th>
      </tr>
    </thead>
    <tbody>
      @foreach($results as $result)
        <tr>
          <td>{{ $result->id }}</td>
          <td>{{ $result->patient_name }}</td>
          <td>{{ $result->lab_branch }}</td>
          <td>{{ $result->doctor->name }}</td>
          <td><a class="underline" href="{{ asset('storage/'.$result->pdf_path) }}" target="_blank">View</a></td>
          <td>{{ $result->doctor_comment }}</td>
          <td>
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
  {{ $results->links() }}
@endsection


