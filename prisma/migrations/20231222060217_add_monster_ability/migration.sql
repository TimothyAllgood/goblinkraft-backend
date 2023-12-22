/*
  Warnings:

  - You are about to alter the column `cr` on the `MonsterAbility` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(2,1)`.

*/
-- AlterTable
ALTER TABLE "MonsterAbility" ALTER COLUMN "cr" SET DATA TYPE DECIMAL(2,1);
