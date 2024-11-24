<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = 'user'; // The name of the table in the database
    protected $primaryKey = 'id'; // The primary key of the table
    protected $allowedFields = ['name', 'email', 'password', 'birthday', 'gender', 'profile_picture']; // The fields that are allowed to be inserted or updated
}