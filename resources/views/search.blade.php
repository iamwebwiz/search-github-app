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
                    <a href="#" class="nav-item nav-link">Topics</a>
                    <a href="#" class="nav-item nav-link">Repositories</a>
                </div>
            </div>
        </nav>
    </body>
</html>
