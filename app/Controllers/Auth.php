<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;

$db = db_connect();

class Auth extends BaseController
{
    protected $session;

    public function __construct()
    {
        $this->session = \Config\Services::session();
    }
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
            'confirm_password' => 'required|matches[password]',
            'birthday' => 'required|valid_date',
            'gender' => 'required|in_list[male,female]'
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
        }

        $userModel = new UserModel();

        $data = [
            'name' => $this->request->getPost('name'),
            'email' => $this->request->getPost('email'),
            'password' => password_hash($this->request->getPost('password'), PASSWORD_DEFAULT),
            'birthday' => $this->request->getPost('birthday'),
            'gender' => $this->request->getPost('gender')
        ];

        if ($userModel->save($data)) {
            return redirect()->to('/login')->with('message', 'Registration successful. Please login.');
        } else {
            return redirect()->back()->withInput()->with('errors', ['Failed to save user data.']);
        }
    }

    public function submitLoginForm()
    {
        $email = $this->request->getPost('email');
        $password = $this->request->getPost('password');

        $session = session();

        $userModel = new UserModel();
        $user = $userModel->where('email', $email)->first();

        if ($user && password_verify($password, $user['password'])) {
            $session->set([
                'user_id' => $user['id'],
                'is_logged_in' => true
            ]);

            return redirect()->to('/')->with('message', 'Login successful.');
        } else {
            return redirect()->back()->with('error', 'Invalid email or password.');
        }
    }

    public function logout()
    {
        // Destroy the session
        $this->session->destroy();
        return redirect()->to('/login')->with('message', 'Logged out successfully.');
    }
}