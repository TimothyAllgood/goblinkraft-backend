/*
  Warnings:

  - You are about to alter the column `cr` on the `Monster` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(3,3)`.

*/
-- AlterTable
ALTER TABLE "Monster" ALTER COLUMN "cr" SET DATA TYPE DECIMAL(3,3);
