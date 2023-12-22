/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[info]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `ItemCurse` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `ItemCurse` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `ItemEffect` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `ItemEffect` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `MenuItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `MenuItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `PlotHook` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `PlotHook` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Quirk` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[info]` on the table `Quirk` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `TavernAtmosphere` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[info]` on the table `TavernAtmosphere` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `TavernEvent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[info]` on the table `TavernEvent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `TavernFeature` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[info]` on the table `TavernFeature` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `TavernRumor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Activity_name_key" ON "Activity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Activity_info_key" ON "Activity"("info");

-- CreateIndex
CREATE UNIQUE INDEX "ItemCurse_name_key" ON "ItemCurse"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ItemCurse_description_key" ON "ItemCurse"("description");

-- CreateIndex
CREATE UNIQUE INDEX "ItemEffect_name_key" ON "ItemEffect"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ItemEffect_description_key" ON "ItemEffect"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Job_name_key" ON "Job"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MenuItem_name_key" ON "MenuItem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MenuItem_description_key" ON "MenuItem"("description");

-- CreateIndex
CREATE UNIQUE INDEX "PlotHook_name_key" ON "PlotHook"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PlotHook_description_key" ON "PlotHook"("description");

-- CreateIndex
CREATE UNIQUE INDEX "Quirk_name_key" ON "Quirk"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Quirk_info_key" ON "Quirk"("info");

-- CreateIndex
CREATE UNIQUE INDEX "TavernAtmosphere_name_key" ON "TavernAtmosphere"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TavernAtmosphere_info_key" ON "TavernAtmosphere"("info");

-- CreateIndex
CREATE UNIQUE INDEX "TavernEvent_name_key" ON "TavernEvent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TavernEvent_info_key" ON "TavernEvent"("info");

-- CreateIndex
CREATE UNIQUE INDEX "TavernFeature_name_key" ON "TavernFeature"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TavernFeature_info_key" ON "TavernFeature"("info");

-- CreateIndex
CREATE UNIQUE INDEX "TavernRumor_name_key" ON "TavernRumor"("name");
