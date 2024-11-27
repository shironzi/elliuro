<?php

namespace App\Models;

use CodeIgniter\Model;

class FavoriteModel extends Model
{
    protected $table = 'favorites';
    protected $primaryKey = 'id';
    protected $allowedFields = ['user_id', 'property_id', 'favorited_at'];
    protected $returnType = 'array';
    protected $useTimestamps = true;
    protected $createdField = 'favorited_at';
    protected $updatedField = false;

    /**
     * Add a favorite
     */
    public function addFavorite($userId, $propertyId)
    {
        // Check if already favorited
        if ($this->where(['user_id' => $userId, 'property_id' => $propertyId])->first()) {
            return false; // Already favorited
        }

        return $this->insert([
            'user_id' => $userId,
            'property_id' => $propertyId,
        ]);
    }

    /**
     * Remove a favorite
     */
    public function removeFavorite($userId, $propertyId)
    {
        return $this->where(['user_id' => $userId, 'property_id' => $propertyId])->delete();
    }

    /**
     * Get all favorites for a user
     */
    public function getUserFavorites($userId)
    {
        return $this->where('user_id', $userId)->findAll();
    }
}