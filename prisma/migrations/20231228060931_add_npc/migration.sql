-- CreateTable
CREATE TABLE "NPC" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "campaignId" INTEGER NOT NULL,

    CONSTRAINT "NPC_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NPC_campaignId_key" ON "NPC"("campaignId");

-- AddForeignKey
ALTER TABLE "NPC" ADD CONSTRAINT "NPC_campaignId_fkey" FOREIGN KEY ("campaignId") REFERENCES "Campaign"("id") ON DELETE CASCADE ON UPDATE CASCADE;
