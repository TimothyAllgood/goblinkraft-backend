/*
  Warnings:

  - You are about to drop the `Quirk` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Quirk" RENAME TO "NPCAttribute";

ALTER TABLE "NPCAttribute" ADD COLUMN "type" TEXT DEFAULT 'quirk';
