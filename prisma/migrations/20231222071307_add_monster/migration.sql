/*
  Warnings:

  - A unique constraint covering the columns `[Name]` on the table `Monster` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Monster" ALTER COLUMN "SavingThrows" DROP NOT NULL,
ALTER COLUMN "Skills" DROP NOT NULL,
ALTER COLUMN "DamageVulnerabilities" DROP NOT NULL,
ALTER COLUMN "DamageResistances" DROP NOT NULL,
ALTER COLUMN "DamageImmunities" DROP NOT NULL,
ALTER COLUMN "ConditionImmunities" DROP NOT NULL,
ALTER COLUMN "CR" DROP NOT NULL,
ALTER COLUMN "Traits" DROP NOT NULL,
ALTER COLUMN "Actions" DROP NOT NULL,
ALTER COLUMN "BonusActions" DROP NOT NULL,
ALTER COLUMN "Reactions" DROP NOT NULL,
ALTER COLUMN "LegendaryActions" DROP NOT NULL,
ALTER COLUMN "MythicActions" DROP NOT NULL,
ALTER COLUMN "LairActions" DROP NOT NULL,
ALTER COLUMN "RegionalEffects" DROP NOT NULL,
ALTER COLUMN "Environment" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Monster_Name_key" ON "Monster"("Name");
