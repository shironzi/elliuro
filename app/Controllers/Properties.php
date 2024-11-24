<?php

namespace App\Controllers;

class Properties extends BaseController
{
    public function index(): string
    {
        return view('properties');
    }

    public function details(): string
    {
        return view('property-details');
    }

    public function propertyForm(): string
    {
        return view('property-form');
    }

    public function propertyFormImage(): string
    {
        return view('property-form-image');
    }

    public function reviewListing(): string
    {
        return view('review-listing');
    }
}