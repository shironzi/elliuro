/*
  Warnings:

  - Made the column `location` on table `details` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `details` MODIFY `location` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `images` ADD COLUMN `updated_at` DATETIME(3) NULL;
