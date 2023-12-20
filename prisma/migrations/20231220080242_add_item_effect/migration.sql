-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE', 'VERYRARE', 'LEGENDARY');

-- CreateTable
CREATE TABLE "ItemEffect" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemType" TEXT NOT NULL,
    "affixType" TEXT NOT NULL,
    "rarity" "Rarity" NOT NULL DEFAULT 'COMMON',

    CONSTRAINT "ItemEffect_pkey" PRIMARY KEY ("id")
);
