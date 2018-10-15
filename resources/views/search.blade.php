<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Open Graph -->
        <meta property="og:title" content="{{ config('app.name') }}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ url('/') }}" />
        <meta property="og:image" content="{{ asset('GitHub-Mark.png') }}" />
        <meta property="og:description" content="Search for GitHub repositories having a specified topic" />

        <title>{{ config('app.name') }}</title>

        <link rel="icon" href="{{ asset('GitHub-Mark.png') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <a href="" class="navbar-brand">{{ config('app.name') }}</a>

                <div class="navbar-nav">
                    <a href="#" class="nav-item nav-link active">Home</a>
                </div>
            </div>
        </nav>

        <div class="container" style="padding-top: 50px">

            <form action="{{ url('/search/users') }}" class="form-inline" method="post">
                @csrf
                <input type="text" name="username" autofocus placeholder="Enter username" class="form-control">
                <button type="submit" class="btn btn-primary">Search</button>
            </form>

            @if (session('users'))
                <div class="row" style="margin-top: 50px;">
                    <div class="col-lg-12"><h2>Search Results</h2></div>

                    @forelse (session('users')['items'] as $user)
                        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" style="margin-bottom: 30px;">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="{{ $user['avatar_url'] }}" alt="">
                                <div class="card-body">
                                    <h4 class="card-title">
                                        <a href="{{ $user['html_url'] }}">
                                            {{ '@'.$user['login'] }}
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    @empty
                        <div class="col-lg-12">
                            <h3 class="text-center text-primary">No result to display</h3>
                        </div>
                    @endforelse
                </div>
            @endif

        </div>
    </body>
</html>
