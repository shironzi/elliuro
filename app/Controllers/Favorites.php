<?php

namespace App\Controllers;

class Favorites extends BaseController
{
    public function index(): string
    {
        return view('favorites');
    }
}
