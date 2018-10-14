<?php

namespace App\Http\Controllers;

use Exception;
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

    public function searchTopics(Requesr $request)
    {
        $this->validate($request, ['q' => 'required|string']);

        try {
            $repositories = $this->guzzleclient->request('POST',"{$this->base_url}/search/topics");

            return back()->with([
                'repos' => $repositories
            ]);
        } catch (Exception $e) {
            return back()->with([
                'error' => 'Unable to fetch repositories having that topic. Please try again.'
            ]);
        }
    }
}
