-- CreateTable
CREATE TABLE "MonsterAbility" (
    "id" SERIAL NOT NULL,
    "affix" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "weight" TEXT NOT NULL DEFAULT 'common',
    "cr" INTEGER NOT NULL,

    CONSTRAINT "MonsterAbility_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MonsterAbility_affix_key" ON "MonsterAbility"("affix");

-- CreateIndex
CREATE UNIQUE INDEX "MonsterAbility_description_key" ON "MonsterAbility"("description");
