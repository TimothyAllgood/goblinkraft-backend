/*
  Warnings:

  - A unique constraint covering the columns `[auth0Id]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profile_auth0Id_key" ON "Profile"("auth0Id");
