@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">My Test Results</h1>
<table class="w-full">
  <thead>
    <tr>
      <th>ID</th><th>Patient</th><th>Branch</th><th>PDF</th><th>Comment</th><th></th>
    </tr>
  </thead>
  <tbody>
    @foreach($results as $result)
      <tr>
        <td>{{ $result->id }}</td>
        <td>{{ $result->patient_name }}</td>
        <td>{{ $result->lab_branch }}</td>
        <td><a class="underline" href="{{ asset('storage/'.$result->pdf_path) }}" target="_blank">View</a></td>
        <td>{{ $result->doctor_comment }}</td>
        <td><a class="underline" href="{{ route('doctor.results.show', $result) }}">Open</a></td>
      </tr>
    @endforeach
  </tbody>
</table>
{{ $results->links() }}
@endsection


