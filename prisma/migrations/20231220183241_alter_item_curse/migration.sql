/*
  Warnings:

  - You are about to drop the column `affixType` on the `ItemCurse` table. All the data in the column will be lost.
  - You are about to drop the column `itemType` on the `ItemCurse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ItemCurse" DROP COLUMN "affixType",
DROP COLUMN "itemType";
