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

    public function addFavorite(int $userId, int $propertyId): bool
    {
        if ($this->where(['user_id' => $userId, 'property_id' => $propertyId])->first()) {
            log_message('debug', "Favorite already exists for user_id={$userId}, property_id={$propertyId}");
            return false;
        }

        $data = [
            'user_id' => $userId,
            'property_id' => $propertyId,
        ];

        $result = $this->insert($data);

        log_message('debug', "Favorite insert result: " . var_export($result, true));
        return $result;
    }

    public function removeFavorite(int $userId, int $propertyId)
    {

        $result = $this->where(['user_id' => $userId, 'property_id' => $propertyId])->delete();

        log_message('debug', "Favorite delete result: " . var_export($result, true));
        return $result;
    }

    public function getUserFavorites(int $userId): array
    {
        return $this->where('user_id', $userId)->findAll();
    }
}