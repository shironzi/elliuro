-- USE elliuro;

-- CREATE TABLE user (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
-- 	username VARCHAR(255) NOT NULL UNIQUE,
--     email VARCHAR(255) NOT NULL UNIQUE,
--     name VARCHAR(255) NOT NULL,
--     password VARCHAR(510) NOT NULL,
--     role ENUM( 'CUSTOMER', 'PROPERTY_OWNER', 'ADMIN', 'SUPPORT_AGENT') NOT NULL DEFAULT 'CUSTOMER',
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- CREATE TABLE property (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     status Int,
--     user_id INT,
--     details_id INT,
--     FOREIGN KEY (status) REFERENCES status_list(id) 
-- 		ON UPDATE CASCADE,
--     FOREIGN KEY (user_id) REFERENCES user(id) 
-- 		ON DELETE CASCADE,
--     FOREIGN KEY (details_id) REFERENCES details(id) 
-- 		ON UPDATE CASCADE 
--         ON DELETE CASCADE
-- );

-- ALTER TABLE property
-- ADD CONSTRAINT fk_status
-- FOREIGN KEY (status) REFERENCES status_list(id)
--     ON UPDATE CASCADE;
    
-- ALTER TABLE property
-- ADD CONSTRAINT fk_user
-- FOREIGN KEY (user_id) REFERENCES user(id)
--     ON DELETE CASCADE;
    
-- ALTER TABLE property
-- ADD CONSTRAINT fk_details
-- FOREIGN KEY (details_id) REFERENCES details(id)
--     ON UPDATE CASCADE
--     ON DELETE CASCADE;

-- CREATE TABLE status_list(
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     status ENUM('draft', 'publish', 'active', 'sold') DEFAULT 'draft'
-- );

-- CREATE TABLE details (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     title VARCHAR(255) NOT NULL,
--     type ENUM("house", "Apartment", "Hotel", "Condominium", "Private") DEFAULT "house",
--     location VARCHAR(524) NOT NULL,
--     price INT NOT NULL,
--     description TEXT NOT NULL
-- );

-- CREATE TABLE images (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     path VARCHAR(510) NOT NULL,
--     added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE property_images (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     property_id INT,
--     image_id INT,
--     FOREIGN KEY (property_id) REFERENCES property(id) 
-- 		ON DELETE CASCADE,
--     FOREIGN KEY (image_id) REFERENCES images(id) 
-- 		ON UPDATE CASCADE 
--         ON DELETE CASCADE
-- );

-- CREATE TABLE property_amenities (
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     property_id INT,
--     amenities_list_id INT,
--     value INT,
--     FOREIGN KEY (property_id) REFERENCES property(id) 
-- 		ON DELETE CASCADE,
--     FOREIGN KEY (amenities_list_id) REFERENCES amenities_list(id) 
-- 		ON UPDATE CASCADE
-- );

-- CREATE TABLE amenities_list(
-- 	id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255)
-- );
