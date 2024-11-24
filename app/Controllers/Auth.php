<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Auth extends BaseController
{
    public function login()
    {
        return view('login');
    }

    public function register()
    {
        return view('register');
    }

    public function submitRegistrationForm()
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|valid_email',
            'password' => 'required|min_length[8]',
            'confirm_password' => 'matches[password]',
            'birthday' => 'required|valid_date',
            'gender' => 'required|in_list[male,female]'
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
        }

        // Save the user to the database
        // Example: $this->userModel->save($data);

        return redirect()->to('/login')->with('message', 'Registration successful. Please login.');
    }
}