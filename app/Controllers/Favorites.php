<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\FavoriteModel;

class Favorites extends BaseController
{
    protected $favoriteModel;

    public function __construct()
    {
        $this->favoriteModel = new FavoriteModel();
    }

    public function index(): mixed
    {
        if (!session()->get('is_logged_in')) {
            return redirect()->to('/login')->with('error', 'Please log in to view favorites.');
        }

        $userId = session()->get('user_id');
        $favorites = $this->favoriteModel->getUserFavorites($userId);

        return view('favorites', ['favorites' => $favorites]);
    }

    public function addFavorite($propertyId): mixed
    {
        if (!session()->get('is_logged_in')) {
            return redirect()->to('/login')->with('error', 'Please log in to add favorites.');
        }

        $userId = session()->get('user_id');

        if ($this->favoriteModel->addFavorite($userId, $propertyId)) {
            return redirect()->back()->with('message', 'Property added to favorites.');
        } else {
            return redirect()->back()->with('error', 'Property is already in your favorites.');
        }
    }

    public function removeFavorite($propertyId): mixed
    {
        if (!session()->get('is_logged_in')) {
            return redirect()->to('/login')->with('error', 'Please log in to remove favorites.');
        }

        $userId = session()->get('user_id');

        if ($this->favoriteModel->removeFavorite($userId, $propertyId)) {
            return redirect()->back()->with('message', 'Property removed from favorites.');
        } else {
            return redirect()->back()->with('error', 'Property was not in your favorites.');
        }
    }
}