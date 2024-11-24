<?php

namespace App\Controllers;

class Properties extends BaseController
{
    public function index(): string
    {
        return view('properties');
    }

    public function show(int $id): string
    {
        return view('property', ['id' => $id]);
    }
}