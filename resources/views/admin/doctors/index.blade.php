@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">{{ __('messages.doctors') }}</h1>
    <a href="{{ route('admin.doctors.create') }}" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.create') }}</a>
  </div>
  <form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3">
    <input type="text" name="q" value="{{ request('q') }}" placeholder="{{ __('messages.search_name_username_speciality') }}" class="border p-2 rounded" />
    <select name="experience" class="border p-2 rounded">
      <option value="">{{ __('messages.all_levels') }}</option>
      @foreach($experienceLevels as $key => $label)
        <option value="{{ $key }}" @selected(request('experience')===$key)>{{ $label }}</option>
      @endforeach
    </select>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">{{ __('messages.filter') }}</button>
      <a href="{{ route('admin.doctors.index') }}" class="px-4 py-2 border rounded">{{ __('messages.reset') }}</a>
    </div>
  </form>
  <div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50 text-left text-gray-600">
        <tr>
          <th class="px-4 py-2">{{ __('messages.id') }}</th>
          <th class="px-4 py-2">{{ __('messages.name') }}</th>
          <th class="px-4 py-2">{{ __('messages.username') }}</th>
          <th class="px-4 py-2">{{ __('messages.speciality') }}</th>
          <th class="px-4 py-2">{{ __('messages.experience') }}</th>
          <th class="px-4 py-2">{{ __('messages.actions') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        @forelse($doctors as $doctor)
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ $doctor->id }}</td>
            <td class="px-4 py-2">{{ $doctor->name }}</td>
            <td class="px-4 py-2">{{ $doctor->username }}</td>
            <td class="px-4 py-2">{{ $doctor->speciality }}</td>
            <td class="px-4 py-2">
              @php
                $levelLabel = isset($experienceLevels[$doctor->experience_level]) ? $experienceLevels[$doctor->experience_level] : ucfirst($doctor->experience_level);
              @endphp
              {{ $levelLabel }}
            </td>
            <td class="px-4 py-2">
              <a class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded mr-2" href="{{ route('admin.doctors.edit', $doctor) }}">{{ __('messages.edit') }}</a>
              <form action="{{ route('admin.doctors.destroy', $doctor) }}" method="post" class="inline">
                @csrf @method('delete')
                <button class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded" onclick="return confirm('{{ __('messages.confirm_delete') }}')">{{ __('messages.delete') }}</button>
              </form>
            </td>
          </tr>
        @empty
          <tr>
            <td colspan="6" class="px-4 py-6 text-center text-gray-500">{{ __('messages.no_doctors') }}</td>
          </tr>
        @endforelse
      </tbody>
    </table>
  </div>
  {{ $doctors->links() }}
@endsection


