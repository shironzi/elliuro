<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->get('/login', 'Auth::login');
$routes->post('/login/submit', 'Auth::submitLoginForm');
$routes->get('/register', 'Auth::register');
$routes->post('/register/submit', 'Auth::submitRegistrationForm');
$routes->get('/logout', 'Auth::logout');


$routes->get('/property', 'Properties::details');
$routes->get('/properties', 'Properties::index');
$routes->get('my-properties', 'Properties::myProperties');

$routes->get('/property-form', 'Properties::propertyForm');
$routes->post('/property-form/submit', 'Properties::postSubmitPropertyForm');
$routes->get('/property-form-image', 'Properties::propertyFormImage');
$routes->post('/property-form-image/submit', 'Properties::postSubmitPropertyFormImage');
$routes->get('/review-listing', 'Properties::reviewListing');
$routes->post('/review-listing/update', 'Properties::updateProperty');
$routes->get('/listing-property', 'ListingProperty::index');

$routes->get('/profile', 'Profile::index');

$routes->get('/favorites', 'Favorites::index', );
$routes->get('/favorites/add/(:num)', 'Favorites::addFavorite/$params', );
$routes->get('/favorites/remove/(:num)', 'Favorites::removeFavorite/$params', );
