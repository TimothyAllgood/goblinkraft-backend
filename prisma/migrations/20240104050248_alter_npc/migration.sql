/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `NPC` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "NPC" ADD COLUMN     "imageId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "NPC_imageId_key" ON "NPC"("imageId");

-- AddForeignKey
ALTER TABLE "NPC" ADD CONSTRAINT "NPC_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
