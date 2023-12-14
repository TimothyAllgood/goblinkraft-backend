/*
  Warnings:

  - You are about to drop the column `test` on the `Campaign` table. All the data in the column will be lost.
  - You are about to drop the column `campaignId` on the `Image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[backgroundImageId]` on the table `Campaign` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_campaignId_fkey";

-- DropIndex
DROP INDEX "Image_campaignId_key";

-- AlterTable
ALTER TABLE "Campaign" DROP COLUMN "test",
ADD COLUMN     "backgroundImageId" INTEGER;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "campaignId";

-- CreateIndex
CREATE UNIQUE INDEX "Campaign_backgroundImageId_key" ON "Campaign"("backgroundImageId");

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_backgroundImageId_fkey" FOREIGN KEY ("backgroundImageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
