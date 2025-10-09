<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $title ?? 'Dashboard' }}</title>
        @vite(['resources/css/app.css','resources/js/app.js'])
    </head>
    <body class="min-h-screen bg-gray-50">
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
                                    <a href="{{ url('/') }}" class="block px-3 py-2 rounded {{ request()->is('/') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">Home</a>
                                </li>
                                <li>
                                    <a href="{{ route('results.index') }}" class="block px-3 py-2 rounded {{ request()->is('results*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">Results</a>
                                </li>
                                <li class="pt-2 text-xs uppercase text-gray-400">Admin</li>
                                <li>
                                    <a href="{{ route('admin.users.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/users*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">Users</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.doctors.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/doctors*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">Doctors</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.announcements.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/announcements*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">Announcements</a>
                                </li>
                                <li>
                                    <a href="{{ route('admin.sliders.index') }}" class="block px-3 py-2 rounded {{ request()->is('admin/sliders*') ? 'bg-black text-white' : 'hover:bg-gray-100' }}">Sliders</a>
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


