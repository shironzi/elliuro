/*
  Warnings:

  - Made the column `status_id` on table `property` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `property` DROP FOREIGN KEY `Property_status_id_fkey`;

-- AlterTable
ALTER TABLE `property` MODIFY `status_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_status_id_fkey` FOREIGN KEY (`status_id`) REFERENCES `Status`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
