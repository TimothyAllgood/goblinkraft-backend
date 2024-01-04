/*
  Warnings:

  - You are about to drop the column `AC` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Actions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Alignment` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `BonusActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `CR` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Charisma` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `ConditionImmunities` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Constitution` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `DamageImmunities` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `DamageResistances` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `DamageVulnerabilities` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Dexterity` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Environment` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `HP` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Intelligence` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `LairActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Languages` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `LegendaryActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `MythicActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Reactions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `RegionalEffects` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `SavingThrows` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Senses` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Size` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Skills` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Source` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Speed` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Strength` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Traits` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `Wisdom` on the `Monster` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Monster` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ac` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alignment` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `charisma` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `constitution` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dexterity` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `intelligence` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languages` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senses` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strength` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Monster` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wisdom` to the `Monster` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Monster_Name_key";

-- AlterTable
ALTER TABLE "Monster" DROP COLUMN "AC",
DROP COLUMN "Actions",
DROP COLUMN "Alignment",
DROP COLUMN "BonusActions",
DROP COLUMN "CR",
DROP COLUMN "Charisma",
DROP COLUMN "ConditionImmunities",
DROP COLUMN "Constitution",
DROP COLUMN "DamageImmunities",
DROP COLUMN "DamageResistances",
DROP COLUMN "DamageVulnerabilities",
DROP COLUMN "Dexterity",
DROP COLUMN "Environment",
DROP COLUMN "HP",
DROP COLUMN "Intelligence",
DROP COLUMN "LairActions",
DROP COLUMN "Languages",
DROP COLUMN "LegendaryActions",
DROP COLUMN "MythicActions",
DROP COLUMN "Name",
DROP COLUMN "Reactions",
DROP COLUMN "RegionalEffects",
DROP COLUMN "SavingThrows",
DROP COLUMN "Senses",
DROP COLUMN "Size",
DROP COLUMN "Skills",
DROP COLUMN "Source",
DROP COLUMN "Speed",
DROP COLUMN "Strength",
DROP COLUMN "Traits",
DROP COLUMN "Type",
DROP COLUMN "Wisdom",
ADD COLUMN     "ac" TEXT NOT NULL,
ADD COLUMN     "actions" TEXT,
ADD COLUMN     "alignment" TEXT NOT NULL,
ADD COLUMN     "bonusActions" TEXT,
ADD COLUMN     "charisma" INTEGER NOT NULL,
ADD COLUMN     "conditionImmunities" TEXT,
ADD COLUMN     "constitution" INTEGER NOT NULL,
ADD COLUMN     "cr" INTEGER,
ADD COLUMN     "damageImmunities" TEXT,
ADD COLUMN     "damageResistances" TEXT,
ADD COLUMN     "damageVulnerabilities" TEXT,
ADD COLUMN     "dexterity" INTEGER NOT NULL,
ADD COLUMN     "environment" TEXT,
ADD COLUMN     "hp" TEXT NOT NULL,
ADD COLUMN     "intelligence" INTEGER NOT NULL,
ADD COLUMN     "lairActions" TEXT,
ADD COLUMN     "languages" TEXT NOT NULL,
ADD COLUMN     "legendaryActions" TEXT,
ADD COLUMN     "mythicActions" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "reactions" TEXT,
ADD COLUMN     "regionalEffects" TEXT,
ADD COLUMN     "savingThrows" TEXT,
ADD COLUMN     "senses" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "skills" TEXT,
ADD COLUMN     "source" TEXT NOT NULL,
ADD COLUMN     "speed" TEXT NOT NULL,
ADD COLUMN     "strength" INTEGER NOT NULL,
ADD COLUMN     "traits" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "wisdom" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Monster_name_key" ON "Monster"("name");
