/*
  Warnings:

  - You are about to drop the column `ac` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `actions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `bonusActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `charisma` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `conditionImmunities` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `constitution` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `damageImmunities` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `damageResistances` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `damageVulnerabilities` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `dexterity` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `hp` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `intelligence` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `lairActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `languages` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `legendaryActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `mythicActions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `reactions` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `regionalEffects` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `savingThrows` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `senses` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `speed` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `traits` on the `Monster` table. All the data in the column will be lost.
  - You are about to drop the column `wisdom` on the `Monster` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Monster" DROP COLUMN "ac",
DROP COLUMN "actions",
DROP COLUMN "bonusActions",
DROP COLUMN "charisma",
DROP COLUMN "conditionImmunities",
DROP COLUMN "constitution",
DROP COLUMN "damageImmunities",
DROP COLUMN "damageResistances",
DROP COLUMN "damageVulnerabilities",
DROP COLUMN "dexterity",
DROP COLUMN "hp",
DROP COLUMN "intelligence",
DROP COLUMN "lairActions",
DROP COLUMN "languages",
DROP COLUMN "legendaryActions",
DROP COLUMN "mythicActions",
DROP COLUMN "reactions",
DROP COLUMN "regionalEffects",
DROP COLUMN "savingThrows",
DROP COLUMN "senses",
DROP COLUMN "size",
DROP COLUMN "skills",
DROP COLUMN "speed",
DROP COLUMN "strength",
DROP COLUMN "traits",
DROP COLUMN "wisdom";
