<?php
namespace App\Models;

use CodeIgniter\Model;

class PropertyPhotoModel extends Model
{
    protected $table = 'property_photo';
    protected $primaryKey = 'id';
    protected $allowedFields = ['property_id', 'photo_path'];
    protected $useTimestamps = false;
    public function getPhotosByPropertyId(int $propertyId): array
    {
        return $this->where('property_id', $propertyId)->findAll();
    }
}