<?php

namespace App\Controllers;

class Properties extends BaseController
{
    public function index(): string
    {
        return view('properties');
    }
}