<?php

namespace App\Controllers;

class ListingProperty extends BaseController
{
    public function index(): string
    {
        return view('listingProperty');
    }
}