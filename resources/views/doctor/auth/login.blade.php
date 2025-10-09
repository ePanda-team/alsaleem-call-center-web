@extends('layouts.app')

@section('content')
<h1 class="text-xl mb-4">Doctor Login</h1>
<form method="post" action="{{ route('doctor.login.submit') }}" class="space-y-3">
    @csrf
    <input name="username" placeholder="Username" class="border p-2 w-full" value="{{ old('username') }}" />
    <input type="password" name="password" placeholder="Password" class="border p-2 w-full" />
    <label class="inline-flex items-center space-x-2"><input type="checkbox" name="remember" /><span>Remember</span></label>
    <button class="px-4 py-2 bg-black text-white">Login</button>
  </form>
@endsection


