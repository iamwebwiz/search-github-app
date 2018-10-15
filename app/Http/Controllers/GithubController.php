<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client as GuzzleClient;
use Illuminate\Http\Request;

class GithubController extends Controller
{
    protected $client;

    protected $base_url;

    public function __construct()
    {
        $this->client = new GuzzleClient();
        $this->base_url = config('github.base_url');
    }

    public function index()
    {
        return view('search');
    }

    public function search(Request $request)
    {
        $response = $this->client->get("{$this->base_url}/search/users?q={$request->username}");
        $users = json_decode($response->getBody(), true);

        return redirect()->back()->with([
            'users' => $users
        ]);
    }
}
