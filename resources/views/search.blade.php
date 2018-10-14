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
    </head>
    <body>
        {{--  --}}
    </body>
</html>
