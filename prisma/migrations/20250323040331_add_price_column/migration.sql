/*
  Warnings:

  - You are about to drop the column `Name` on the `phone` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Phone` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Phone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Phone` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Phone_Name_key` ON `phone`;

-- AlterTable
ALTER TABLE `phone` DROP COLUMN `Name`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Phone_name_key` ON `Phone`(`name`);
