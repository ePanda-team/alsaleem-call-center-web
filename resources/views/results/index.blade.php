@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">{{ __('messages.results') }}</h1>
    <a href="{{ route('results.create') }}" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.add') }}</a>
  </div>
  <form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-5 gap-3">
    <input type="text" name="q" value="{{ request('q') }}" placeholder="{{ __('messages.search_patient_branch') }}" class="border p-2 rounded" />
    <select name="doctor_id" class="border p-2 rounded">
      <option value="">{{ __('messages.all_doctors') }}</option>
      @foreach(\App\Models\Doctor::orderBy('name')->get() as $doc)
        <option value="{{ $doc->id }}" @selected(request('doctor_id')==$doc->id)>{{ $doc->name }} ({{ $doc->username }})</option>
      @endforeach
    </select>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">{{ __('messages.filter') }}</button>
      <a href="{{ route('results.index') }}" class="px-4 py-2 border rounded">{{ __('messages.reset') }}</a>
    </div>
  </form>
  <div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50 text-left text-gray-600">
        <tr>
          <th class="px-4 py-2">{{ __('messages.id') }}</th>
          <th class="px-4 py-2">{{ __('messages.patient') }}</th>
          <th class="px-4 py-2">{{ __('messages.branch') }}</th>
          <th class="px-4 py-2">{{ __('messages.doctor') }}</th>
          <th class="px-4 py-2">{{ __('messages.pdf') }}</th>
          <th class="px-4 py-2">{{ __('messages.comment') }}</th>
          <th class="px-4 py-2">{{ __('messages.actions') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        @forelse($results as $result)
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ $result->id }}</td>
            <td class="px-4 py-2">{{ $result->patient_name }}</td>
            <td class="px-4 py-2">{{ $result->lab_branch }}</td>
            <td class="px-4 py-2">{{ $result->doctor->name }}</td>
            <td class="px-4 py-2"><a class="underline text-blue-600 hover:text-blue-800" href="{{ asset('storage/'.$result->pdf_path) }}" target="_blank">{{ __('messages.view') }}</a></td>
            <td class="px-4 py-2">{{ $result->doctor_comment ?? '—' }}</td>
            <td class="px-4 py-2">
              <a class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded mr-2" href="{{ route('results.edit', $result) }}">{{ __('messages.edit') }}</a>
              <form action="{{ route('results.destroy', $result) }}" method="post" class="inline">
                @csrf @method('delete')
                <button class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded" onclick="return confirm('{{ __('messages.confirm_delete') }}')">{{ __('messages.delete') }}</button>
              </form>
            </td>
          </tr>
        @empty
          <tr>
            <td colspan="7" class="px-4 py-6 text-center text-gray-500">{{ __('messages.no_results') }}</td>
          </tr>
        @endforelse
      </tbody>
    </table>
  </div>
  {{ $results->links() }}
@endsection


