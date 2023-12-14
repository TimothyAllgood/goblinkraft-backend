/*
  Warnings:

  - A unique constraint covering the columns `[userImageId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "userImageId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userImageId_key" ON "Profile"("userImageId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userImageId_fkey" FOREIGN KEY ("userImageId") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
