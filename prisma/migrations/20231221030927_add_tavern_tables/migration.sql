-- CreateTable
CREATE TABLE "Rumor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'tavern',

    CONSTRAINT "Rumor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TavernAtmosphere" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "quality" TEXT NOT NULL DEFAULT 'squalid',

    CONSTRAINT "TavernAtmosphere_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TavernFeature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "quality" TEXT NOT NULL DEFAULT 'squalid',
    "type" TEXT,

    CONSTRAINT "TavernFeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TavernEvent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "quality" TEXT NOT NULL DEFAULT 'squalid',
    "type" TEXT,

    CONSTRAINT "TavernEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'food',
    "quality" TEXT NOT NULL DEFAULT 'common',

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);
