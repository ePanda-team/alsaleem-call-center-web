@extends('layouts.app')

@section('content')
<div class="min-h-[60vh] flex items-center justify-center">
  <div class="w-full max-w-md bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] rounded-lg border border-gray-200 p-6">
    <div class="mb-4 text-center">
      <h1 class="text-2xl font-semibold">Staff Login</h1>
      <p class="text-sm text-gray-500">Sign in to access the call center dashboard</p>
    </div>
    <form method="post" action="{{ route('login.submit') }}" class="space-y-4">
      @csrf
      <div>
        <label class="block text-sm mb-1">Email</label>
        <input name="email" type="email" placeholder="you@example.com" class="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400" value="{{ old('email') }}" />
      </div>
      <div>
        <label class="block text-sm mb-1">Password</label>
        <input type="password" name="password" placeholder="••••••••" class="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div class="flex items-center justify-between">
        <label class="inline-flex items-center space-x-2"><input type="checkbox" name="remember" class="rounded" /><span class="text-sm">Remember me</span></label>
        <a class="text-sm underline" href="#">Forgot password?</a>
      </div>
      <button class="w-full px-4 py-2 bg-black text-white rounded">Login</button>
    </form>
  </div>
 </div>
@endsection


