<!doctype html>
<html lang="{{ app()->getLocale() }}" dir="{{ app()->getLocale()==='ar' ? 'rtl' : 'ltr' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $title ?? 'Dashboard' }}</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite(['resources/css/app.css','resources/js/app.js'])
    </head>
    <body class="min-h-screen bg-gray-50">
        <header class="bg-white border-b">
            <div class="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 items-center">
                <div>
                    @guest
                        <a href="{{ route('login') }}" class="px-3 py-1.5 border rounded">{{ __('messages.login') }}</a>
                    @endguest
                </div>
                <div class="text-center font-semibold">
                    {{ __('messages.app_name') }}
                </div>
                <div class="text-right">
                    @auth
                        <form method="post" action="{{ route('logout') }}" class="inline">
                            @csrf
                            <button class="px-3 py-1.5 border rounded">{{ __('messages.logout') }}</button>
                        </form>
                    @endauth
                    <form method="post" action="{{ route('locale.set', app()->getLocale()==='ar' ? 'en' : 'ar') }}" class="inline ml-2">
                        @csrf
                        <button class="px-3 py-1.5 border rounded" title="Switch language">{{ app()->getLocale()==='ar' ? 'EN' : 'AR' }}</button>
                    </form>
                </div>
            </div>
        </header>
        <div class="max-w-7xl mx-auto py-6 px-4">
            @if(session('status'))
                <div class="p-3 bg-green-100 border border-green-300 mb-4">{{ session('status') }}</div>
            @endif

            <div class="flex gap-6">
                @unless (request()->routeIs('login*'))
                    <aside class="w-56 bg-white rounded-lg shadow border border-gray-200 p-4 h-fit sticky top-6">
                        <nav>
                            <ul class="space-y-1">
                                <li>
                                    <a href="{{ url('/') }}" class="block px-3 py-2 rounded {{ request()->is('/') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">{{ __('messages.home') }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('results.index') }}" class="block px-3 py-2 rounded {{ request()->is('results*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">{{ __('messages.results') }}</a>
                                </li>
                                <li class="pt-2 text-xs uppercase text-gray-400">Admin</li>
                                <li>
                                    <a href="{{ route('admin.users.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/users*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">{{ __('messages.users') }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.doctors.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/doctors*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">{{ __('messages.doctors') }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.announcements.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/announcements*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">{{ __('messages.announcements') }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.sliders.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/sliders*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">{{ __('messages.sliders') }}</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.lab-tests.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/lab-tests*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">{{ __('messages.lab_tests') }}</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                @endunless

                <main class="flex-1">
                    @yield('content')
                </main>
            </div>
        </div>
        
    </body>
    </html>


