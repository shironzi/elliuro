<?php
namespace App\Controllers;

use App\Models\PropertyModel;
use App\Models\PropertyPhotoModel;
use App\Models\FavoriteModel;
use CodeIgniter\Exceptions\PageNotFoundException;

class Properties extends BaseController
{

    protected $favoriteModel; // Add this

    public function __construct()
    {
        $this->favoriteModel = new FavoriteModel(); // Initialize FavoriteModel
    }

    public function index()
    {
        $propertyModel = new PropertyModel();
        $properties = $propertyModel->findAll();

        $propertyPhotoModel = new PropertyPhotoModel();
        foreach ($properties as &$property) {
            $property['photos'] = $propertyPhotoModel->getPhotosByPropertyId($property['id']);
        }

        $favorites = [];
        if ($this->session->get('is_logged_in')) {
            $userId = $this->session->get('user_id');
            $favorites = $this->favoriteModel->getUserFavorites($userId);
        }

        return view('properties', [
            'properties' => $properties,
            'favorites' => $favorites
        ]);
    }
    public function propertyForm(): string
    {
        return view('property-form');
    }

    public function postSubmitPropertyForm()
    {
        // Validation rules
        $rules = [
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'location' => 'required',
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
        }



        $propertyModel = new PropertyModel();

        $session = session();
        $user_id = $session->get('user_id');

        $propertyData = [
            'title' => $this->request->getPost('title'),
            'description' => $this->request->getPost('description'),
            'price' => $this->request->getPost('price'),
            'location' => $this->request->getPost('location'),
            'created_by' => $user_id,
        ];

        if ($propertyModel->save($propertyData)) {
            $propertyId = $propertyModel->insertID();

            $session->set('propertyId', $propertyId);

            return redirect()->to('/property-form-image')->with('message', 'Property created successfully. Please upload images.');
        } else {
            return redirect()->back()->withInput()->with('errors', ['Failed to save property data.']);
        }
    }

    public function propertyFormImage(): mixed
    {
        $session = session();
        $propertyId = $session->get('propertyId');

        if (!$propertyId) {
            return redirect()->to('/property-form')->with('errors', ['Property data is missing.']);
        }

        $propertyModel = new PropertyModel();
        $property = $propertyModel->find($propertyId);

        return view('property-form-image', ['property' => $property]);
    }

    public function postSubmitPropertyFormImage()
    {
        $session = session();
        $propertyId = $session->get('propertyId');

        if (!$propertyId) {
            return redirect()->to('/property-form')->with('errors', ['Property data is missing.']);
        }

        $propertyPhotoModel = new PropertyPhotoModel();
        $imageFields = ['image1', 'image2', 'image3', 'image4'];

        foreach ($imageFields as $field) {
            $image = $this->request->getFile($field);

            if ($image && $image->isValid() && !$image->hasMoved()) {
                $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-png', 'image/apng'];
                if (!in_array($image->getMimeType(), $allowedTypes)) {
                    return redirect()->back()->with('errors', ["Invalid file type for $field. Allowed types: JPEG, PNG, GIF."]);
                }

                if ($image->getSize() > 20 * 1024 * 1024) {
                    return redirect()->back()->with('errors', ["File size too large for $field. Maximum allowed size is 2MB."]);
                }

                $newName = $image->getRandomName();

                $image->move(ROOTPATH . 'public/uploads/', $newName);

                $propertyPhotoModel->save([
                    'property_id' => $propertyId,
                    'photo_path' => 'uploads/' . $newName,
                ]);
            }
        }

        return redirect()->to('/review-listing')->with('message', 'Images uploaded successfully. Please review your listing.');
    }

    public function details($id): mixed
    {
        $propertyModel = new PropertyModel();
        $property = $propertyModel->find($id);

        if (!$property) {
            throw PageNotFoundException::forPageNotFound();
        }

        $propertyPhotoModel = new PropertyPhotoModel();
        $photos = $propertyPhotoModel->getPhotosByPropertyId($id);

        return view('property-details', [
            'property' => $property,
            'photos' => $photos,
        ]);
    }

    public function reviewListing(): mixed
    {
        $session = session();
        $propertyId = $session->get('propertyId');

        if (!$propertyId) {
            return redirect()->to('/property-form');
        }

        $propertyModel = new PropertyModel();
        $property = $propertyModel->find($propertyId);

        if (!$property) {
            return redirect()->to('/property-form');
        }

        $propertyPhotoModel = new PropertyPhotoModel();
        $photos = $propertyPhotoModel->getPhotosByPropertyId($propertyId);

        return view('review-listing', [
            'property' => $property,
            'photos' => $photos,
        ]);
    }
    public function updateProperty()
    {
        $session = session();
        $propertyId = $session->get('propertyId');

        // Validation rules
        $rules = [
            'title' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'location' => 'required',
        ];

        if (!$this->validate($rules)) {
            return redirect()->back()->withInput()->with('errors', $this->validator->getErrors());
        }

        $propertyModel = new PropertyModel();

        if (!$propertyModel->find($propertyId)) {
            return redirect()->back()->withInput()->with('errors', ['Property not found.']);
        }

        $user_id = $session->get('user_id');

        $updatedData = [
            'title' => $this->request->getPost('title'),
            'description' => $this->request->getPost('description'),
            'price' => $this->request->getPost('price'),
            'location' => $this->request->getPost('location'),
            'created_by' => $user_id,
        ];

        if ($propertyModel->update($propertyId, $updatedData)) {
            $session = session();
            $session->remove('propertyId');

            return redirect()->to('/properties')->with('message', 'Property updated successfully.');
        } else {
            return redirect()->back()->withInput()->with('errors', ['Failed to update property data.']);
        }
    }

    public function myProperties()
    {
        // $session = session();
        // $user_id = $session->get('user_id');
        // $propertyModel = new PropertyModel();
        // $properties = $propertyModel->where('user_id', $user_id)->findAll();
        // return view('my-properties', ['properties' => $properties]);

        return view('my-properties');
    }
}