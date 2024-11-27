<?php

namespace App\Models;

use CodeIgniter\Model;

class PropertyModel extends Model
{
    protected $table = 'property';
    protected $primaryKey = 'id';
    protected $allowedFields = ['title', 'description', 'price', 'location', 'created_by'];
    protected $useTimestamps = false;

    public function getPropertyWithPhotos(int $id)
    {
        return $this->find($id);
    }
}

