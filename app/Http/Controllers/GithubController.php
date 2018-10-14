<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client as GuzzleClient;
use Illuminate\Http\Request;

class GithubController extends Controller
{
    protected $guzzleclient;

    protected $base_url;

    public function __construct()
    {
        $this->guzzleclient = new GuzzleClient();
        $this->base_url = config('github.base_url');
    }

    public function index()
    {
        return view('search');
    }

    //
}
