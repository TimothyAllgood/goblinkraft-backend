-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" TEXT NOT NULL DEFAULT 'password',
ALTER COLUMN "password" DROP NOT NULL;
