/*
  Warnings:

  - Made the column `type` on table `NPCAttribute` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "NPCAttribute" RENAME CONSTRAINT "Quirk_pkey" TO "NPCAttribute_pkey";
ALTER TABLE "NPCAttribute" ALTER COLUMN "type" SET NOT NULL;

-- RenameIndex
ALTER INDEX "Quirk_info_key" RENAME TO "NPCAttribute_info_key";