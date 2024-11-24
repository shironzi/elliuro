<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('/login', 'Auth::login');
$routes->get('/register', 'Auth::register');
$routes->get('/property', 'Properties::details');
$routes->get('/properties', 'Properties::index');
$routes->get('/property-form', 'Properties::propertyForm');
$routes->get('/listing-property', 'Properties::index');
$routes->get('/property-form-image', 'Properties::propertyFormImage');
