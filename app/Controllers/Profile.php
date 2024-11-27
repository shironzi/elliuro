<?php

namespace App\Controllers;

class Profile extends BaseController
{
    public function index(): string
    {
        return view('profile');
    }
}
