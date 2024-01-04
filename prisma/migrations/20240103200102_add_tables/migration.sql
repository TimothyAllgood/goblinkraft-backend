-- CreateTable
CREATE TABLE "CharacterTrait" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "hint" TEXT NOT NULL,
    "answers" TEXT[],

    CONSTRAINT "CharacterTrait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassTrait" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "hint" TEXT,
    "answers" TEXT[],
    "characterClassId" INTEGER NOT NULL,

    CONSTRAINT "ClassTrait_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Origin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Origin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Culture" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Culture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locale" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Locale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Tone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "hint" TEXT,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClassTrait" ADD CONSTRAINT "ClassTrait_characterClassId_fkey" FOREIGN KEY ("characterClassId") REFERENCES "CharacterClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
