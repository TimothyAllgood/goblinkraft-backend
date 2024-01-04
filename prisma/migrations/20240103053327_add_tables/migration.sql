-- CreateTable
CREATE TABLE "CharacterClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CharacterClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Backstory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "alignment" TEXT,
    "concept" TEXT,
    "characterClassId" INTEGER,
    "raceId" INTEGER,

    CONSTRAINT "Backstory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trap" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Trap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CombatDescription" (
    "id" SERIAL NOT NULL,
    "attackType" TEXT,
    "description" TEXT,

    CONSTRAINT "CombatDescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Backstory" ADD CONSTRAINT "Backstory_characterClassId_fkey" FOREIGN KEY ("characterClassId") REFERENCES "CharacterClass"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Backstory" ADD CONSTRAINT "Backstory_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE SET NULL ON UPDATE CASCADE;
