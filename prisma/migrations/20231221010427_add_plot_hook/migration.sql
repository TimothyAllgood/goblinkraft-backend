-- CreateTable
CREATE TABLE "PlotHook" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'npc',

    CONSTRAINT "PlotHook_pkey" PRIMARY KEY ("id")
);
