@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">{{ __('messages.users') }}</h1>
    <a href="{{ route('admin.users.create') }}" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.create') }}</a>
  </div>
  <form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3">
    <input type="text" name="q" value="{{ request('q') }}" placeholder="{{ __('messages.search_name_email') }}" class="border p-2 rounded" />
    <select name="role" class="border p-2 rounded">
      <option value="">{{ __('messages.all_roles') }}</option>
      @foreach(['admin','supervisor','agent'] as $r)
        <option value="{{ $r }}" @selected(request('role')===$r)>{{ ucfirst($r) }}</option>
      @endforeach
    </select>
    <div class="flex gap-2">
      <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">{{ __('messages.filter') }}</button>
      <a href="{{ route('admin.users.index') }}" class="px-4 py-2 border rounded">{{ __('messages.reset') }}</a>
    </div>
  </form>
  <div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50 text-left text-gray-600">
        <tr>
          <th class="px-4 py-2">{{ __('messages.id') }}</th>
          <th class="px-4 py-2">{{ __('messages.name') }}</th>
          <th class="px-4 py-2">{{ __('messages.email') }}</th>
          <th class="px-4 py-2">{{ __('messages.role') }}</th>
          <th class="px-4 py-2">{{ __('messages.actions') }}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        @forelse($users as $user)
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-2">{{ $user->id }}</td>
            <td class="px-4 py-2">{{ $user->name }}</td>
            <td class="px-4 py-2">{{ $user->email }}</td>
            <td class="px-4 py-2">{{ ucfirst($user->role) }}</td>
            <td class="px-4 py-2">
              <a class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded mr-2" href="{{ route('admin.users.edit', $user) }}">{{ __('messages.edit') }}</a>
              <form action="{{ route('admin.users.destroy', $user) }}" method="post" class="inline">
                @csrf @method('delete')
                <button class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded" onclick="return confirm('{{ __('messages.confirm_delete') }}')">{{ __('messages.delete') }}</button>
              </form>
            </td>
          </tr>
        @empty
          <tr>
            <td colspan="5" class="px-4 py-6 text-center text-gray-500">{{ __('messages.no_users') }}</td>
          </tr>
        @endforelse
      </tbody>
    </table>
  </div>
  {{ $users->links() }}
@endsection


