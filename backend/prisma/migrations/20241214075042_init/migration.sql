/*
  Warnings:

  - You are about to drop the column `amenityId` on the `property_amenities` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `property_amenities` DROP FOREIGN KEY `Property_Amenities_amenityId_fkey`;

-- AlterTable
ALTER TABLE `amenity` MODIFY `name` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `details` MODIFY `title` VARCHAR(191) NULL,
    MODIFY `location` VARCHAR(191) NULL,
    MODIFY `price` INTEGER NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `image` MODIFY `image` LONGBLOB NULL,
    MODIFY `added_at` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `property` MODIFY `status_id` INTEGER NULL,
    MODIFY `details_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `property_amenities` DROP COLUMN `amenityId`,
    MODIFY `amenity_id` INTEGER NULL,
    MODIFY `value` INTEGER NULL;

-- AlterTable
ALTER TABLE `property_images` MODIFY `image_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Property_Amenities` ADD CONSTRAINT `Property_Amenities_amenity_id_fkey` FOREIGN KEY (`amenity_id`) REFERENCES `Amenity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
