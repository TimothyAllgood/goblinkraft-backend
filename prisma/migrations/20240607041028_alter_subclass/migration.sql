/*
  Warnings:

  - You are about to drop the column `characterClassID` on the `Subclass` table. All the data in the column will be lost.
  - Added the required column `characterClassId` to the `Subclass` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subclass" DROP CONSTRAINT "Subclass_characterClassID_fkey";

-- AlterTable
ALTER TABLE "Subclass" DROP COLUMN "characterClassID",
ADD COLUMN     "characterClassId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Subclass" ADD CONSTRAINT "Subclass_characterClassId_fkey" FOREIGN KEY ("characterClassId") REFERENCES "CharacterClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
