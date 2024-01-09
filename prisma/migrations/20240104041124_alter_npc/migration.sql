/*
  Warnings:

  - You are about to drop the column `info` on the `NPC` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NPC" DROP COLUMN "info",
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "honorific" TEXT,
ADD COLUMN     "secrets" TEXT,
ADD COLUMN     "title" TEXT;
