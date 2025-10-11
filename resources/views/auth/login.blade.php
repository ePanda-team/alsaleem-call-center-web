@extends('layouts.app')

@section('content')
<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
  <div class="w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-100 p-8">
    <div class="mb-8 text-center">
      <div class="mb-6">
        <img src="{{ asset('main-logo.png') }}" alt="Alsaleem Call Center" class="h-16 mx-auto">
      </div>
      <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ __('messages.staff_login') }}</h1>
      <p class="text-gray-600">{{ __('messages.sign_in_dashboard') }}</p>
    </div>
    
    @if($errors->any())
      <div class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
        <div class="text-red-600 text-sm">
          @foreach($errors->all() as $error)
            <p>{{ $error }}</p>
          @endforeach
        </div>
      </div>
    @endif
    
    <form method="post" action="{{ route('login.submit') }}" class="space-y-6">
      @csrf
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">{{ __('messages.email') }}</label>
        <input name="email" type="email" placeholder="{{ __('messages.email_placeholder') }}" 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE0003] focus:border-transparent transition-all duration-200" 
               value="{{ old('email') }}" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">{{ __('messages.password') }}</label>
        <input type="password" name="password" placeholder="{{ __('messages.password_placeholder') }}" 
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FE0003] focus:border-transparent transition-all duration-200" />
      </div>
      <button class="w-full px-4 py-3 bg-[#FE0003] hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#FE0003] focus:ring-offset-2">
        {{ __('messages.login') }}
      </button>
    </form>
  </div>
</div>
@endsection


