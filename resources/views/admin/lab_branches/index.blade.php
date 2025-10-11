@extends('layouts.app')

@section('content')
<div class="flex justify-between mb-4">
    <h1 class="text-xl">{{ __('messages.lab_branches') }}</h1>
    <a href="{{ route('admin.lab-branches.create') }}" class="px-4 py-2 bg-[#FE0003] hover:bg-red-700 text-white rounded font-medium transition-all duration-200">{{ __('messages.create') }}</a>
</div>

<form method="get" class="mb-4 grid grid-cols-1 md:grid-cols-4 gap-3">
    <input type="text" name="name" value="{{ request('name') }}" placeholder="{{ __('messages.name') }}" class="border p-2 rounded" />
    <input type="text" name="address" value="{{ request('address') }}" placeholder="{{ __('messages.address') }}" class="border p-2 rounded" />
    <select name="is_active" class="border p-2 rounded">
        <option value="">{{ __('messages.all_status') }}</option>
        <option value="1" {{ request('is_active') === '1' ? 'selected' : '' }}>{{ __('messages.active') }}</option>
        <option value="0" {{ request('is_active') === '0' ? 'selected' : '' }}>{{ __('messages.inactive') }}</option>
    </select>
    <div class="flex gap-2">
        <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">{{ __('messages.filter') }}</button>
        <a href="{{ route('admin.lab-branches.index') }}" class="px-4 py-2 border rounded">{{ __('messages.reset') }}</a>
    </div>
</form>

<div class="overflow-x-auto bg-white rounded-lg border border-gray-200">
    <table class="min-w-full text-sm">
        <thead class="bg-gray-50 text-left text-gray-600">
            <tr>
                <th class="px-4 py-2">{{ __('messages.name') }}</th>
                <th class="px-4 py-2">{{ __('messages.address') }}</th>
                <th class="px-4 py-2">{{ __('messages.phone') }}</th>
                <th class="px-4 py-2">{{ __('messages.status') }}</th>
                <th class="px-4 py-2">{{ __('messages.actions') }}</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
            @forelse($labBranches as $labBranch)
                <tr class="hover:bg-gray-50">
                    <td class="px-4 py-2">{{ $labBranch->name }}</td>
                    <td class="px-4 py-2">{{ $labBranch->address ?? '—' }}</td>
                    <td class="px-4 py-2">{{ $labBranch->phone ?? '—' }}</td>
                    <td class="px-4 py-2">
                        <span class="px-2 py-1 text-xs rounded-full {{ $labBranch->is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800' }}">
                            {{ $labBranch->is_active ? __('messages.active') : __('messages.inactive') }}
                        </span>
                    </td>
                    <td class="px-4 py-2">
                        <a class="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded mr-2" href="{{ route('admin.lab-branches.edit', $labBranch) }}">{{ __('messages.edit') }}</a>
                        <form action="{{ route('admin.lab-branches.destroy', $labBranch) }}" method="post" class="inline">
                            @csrf @method('delete')
                            <button class="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded" onclick="return confirm('{{ __('messages.confirm_delete') }}')">{{ __('messages.delete') }}</button>
                        </form>
                    </td>
                </tr>
            @empty
                <tr>
                    <td colspan="5" class="px-4 py-6 text-center text-gray-500">{{ __('messages.no_lab_branches_found') }}</td>
                </tr>
            @endforelse
        </tbody>
    </table>
</div>
{{ $labBranches->links() }}
@endsection
