-- DropForeignKey
ALTER TABLE "Campaign" DROP CONSTRAINT "Campaign_backgroundImageId_fkey";

-- AddForeignKey
ALTER TABLE "Campaign" ADD CONSTRAINT "Campaign_backgroundImageId_fkey" FOREIGN KEY ("backgroundImageId") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;
