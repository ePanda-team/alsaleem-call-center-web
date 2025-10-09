@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Announcements</h1>
<ul class="space-y-2">
  @foreach(\App\Models\Announcement::orderByDesc('id')->paginate(20) as $item)
    <li class="border p-3">
      <div class="font-semibold">{{ $item->title }}</div>
      <div class="text-sm">{{ $item->body }}</div>
    </li>
  @endforeach
</ul>
@endsection


