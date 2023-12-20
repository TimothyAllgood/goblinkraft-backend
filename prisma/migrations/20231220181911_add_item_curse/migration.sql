-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('MINOR', 'MAJOR');

-- CreateTable
CREATE TABLE "ItemCurse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemType" TEXT,
    "affixType" TEXT NOT NULL,
    "severity" "Severity" NOT NULL DEFAULT 'MINOR',

    CONSTRAINT "ItemCurse_pkey" PRIMARY KEY ("id")
);
