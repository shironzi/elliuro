/*
  Warnings:

  - You are about to drop the column `updated_At` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `amenity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_amenities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `property_images` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[status_id]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[details_id]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Made the column `details_id` on table `property` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_details_id_fkey`;

-- DropForeignKey
ALTER TABLE `property_amenities` DROP FOREIGN KEY `Property_Amenities_amenity_id_fkey`;

-- DropForeignKey
ALTER TABLE `property_amenities` DROP FOREIGN KEY `Property_Amenities_property_id_fkey`;

-- DropForeignKey
ALTER TABLE `property_images` DROP FOREIGN KEY `Property_Images_image_id_fkey`;

-- DropForeignKey
ALTER TABLE `property_images` DROP FOREIGN KEY `Property_Images_property_id_fkey`;

-- AlterTable
ALTER TABLE `property` MODIFY `details_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `updated_At`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `amenity`;

-- DropTable
DROP TABLE `image`;

-- DropTable
DROP TABLE `property_amenities`;

-- DropTable
DROP TABLE `property_images`;

-- CreateTable
CREATE TABLE `Images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` LONGBLOB NULL,
    `added_at` DATETIME(3) NULL,
    `property_id` INTEGER NOT NULL,

    INDEX `Images_property_id_idx`(`property_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Amenities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` INTEGER NOT NULL,
    `property_id` INTEGER NOT NULL,

    INDEX `Amenities_property_id_idx`(`property_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `Details_type_idx` ON `Details`(`type`);

-- CreateIndex
CREATE INDEX `Details_location_idx` ON `Details`(`location`);

-- CreateIndex
CREATE UNIQUE INDEX `Property_status_id_key` ON `Property`(`status_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Property_user_id_key` ON `Property`(`user_id`);

-- CreateIndex
CREATE UNIQUE INDEX `Property_details_id_key` ON `Property`(`details_id`);

-- CreateIndex
CREATE INDEX `Status_status_idx` ON `Status`(`status`);

-- CreateIndex
CREATE INDEX `User_username_idx` ON `User`(`username`);

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_details_id_fkey` FOREIGN KEY (`details_id`) REFERENCES `Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Amenities` ADD CONSTRAINT `Amenities_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `property` RENAME INDEX `Property_details_id_fkey` TO `Property_details_id_idx`;

-- RenameIndex
ALTER TABLE `property` RENAME INDEX `Property_status_id_fkey` TO `Property_status_id_idx`;

-- RenameIndex
ALTER TABLE `property` RENAME INDEX `Property_user_id_fkey` TO `Property_user_id_idx`;
