<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client as GuzzleClient;
use Illuminate\Http\Request;

class GithubController extends Controller
{
    protected $guzzleclient;

    public function __construct()
    {
        $this->guzzleclient = new GuzzleClient();
    }
}
