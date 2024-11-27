<?php
namespace App\Controllers;

use App\Models\PropertyModel;
use App\Models\PropertyPhotoModel;
use CodeIgniter\Exceptions\PageNotFoundException;

class Properties extends BaseController
{
    /**
     * Display the property creation form.
     */
    public function propertyForm(): string
    {
        return view('property-form');
    }

    /**
     * Handle submission of the property creation form.
     */
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

        // Save property data
        if ($propertyModel->save($propertyData)) {
            // Get the ID of the newly inserted property
            $propertyId = $propertyModel->insertID();

            // Store property ID in session for image upload
            $session->set('propertyId', $propertyId);

            // Redirect to image upload form
            return redirect()->to('/property-form-image')->with('message', 'Property created successfully. Please upload images.');
        } else {
            return redirect()->back()->withInput()->with('errors', ['Failed to save property data.']);
        }
    }

    /**
     * Display the property image upload form.
     */
    public function propertyFormImage(): mixed
    {
        // Check if property ID is in session
        $session = session();
        $propertyId = $session->get('propertyId');

        if (!$propertyId) {
            return redirect()->to('/property-form')->with('errors', ['Property data is missing.']);
        }

        // Optionally, fetch property details
        $propertyModel = new PropertyModel();
        $property = $propertyModel->find($propertyId);

        return view('property-form-image', ['property' => $property]);
    }

    /**
     * Handle submission of the property image upload form.
     */
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
                // Validate file type (optional but recommended)
                $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-png', 'image/apng'];
                if (!in_array($image->getMimeType(), $allowedTypes)) {
                    return redirect()->back()->with('errors', ["Invalid file type for $field. Allowed types: JPEG, PNG, GIF."]);
                }

                // Validate file size (optional, e.g., max 2MB)
                if ($image->getSize() > 20 * 1024 * 1024) { // 2MB
                    return redirect()->back()->with('errors', ["File size too large for $field. Maximum allowed size is 2MB."]);
                }

                // Generate a unique file name
                $newName = $image->getRandomName();

                // Move the file to the uploads directory
                $image->move(ROOTPATH . 'public/uploads/', $newName);

                // Save the image path to the database
                $propertyPhotoModel->save([
                    'property_id' => $propertyId,
                    'photo_path' => 'uploads/' . $newName,
                ]);
            }
        }

        // Redirect to review listing without removing propertyId
        return redirect()->to('/review-listing')->with('message', 'Images uploaded successfully. Please review your listing.');
    }

    /**
     * Display the list of properties.
     */
    public function index()
    {
        $propertyModel = new PropertyModel();
        $properties = $propertyModel->findAll();

        // Load photos for each property
        $propertyPhotoModel = new PropertyPhotoModel();
        foreach ($properties as &$property) {
            $property['photos'] = $propertyPhotoModel->getPhotosByPropertyId($property['id']);
        }

        return view('properties', ['properties' => $properties]);
    }

    /**
     * Display property details with images.
     */
    public function details($id): mixed
    {
        $propertyModel = new PropertyModel();
        $property = $propertyModel->find($id);

        if (!$property) {
            throw PageNotFoundException::forPageNotFound();
        }

        // Fetch associated photos
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

        // Update property data using the model's update method
        if ($propertyModel->update($propertyId, $updatedData)) {
            // Remove propertyId from session after successful update
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