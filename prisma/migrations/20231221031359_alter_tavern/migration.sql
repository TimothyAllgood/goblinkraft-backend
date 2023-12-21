/*
  Warnings:

  - You are about to drop the `Rumor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Rumor";

-- CreateTable
CREATE TABLE "TavernRumor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'tavern',

    CONSTRAINT "TavernRumor_pkey" PRIMARY KEY ("id")
);
