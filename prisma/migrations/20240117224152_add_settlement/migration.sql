-- CreateTable
CREATE TABLE "Settlement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "population" INTEGER,
    "description" TEXT,
    "leaderId" INTEGER,
    "leaderTitle" TEXT,
    "resources" TEXT,
    "economy" TEXT,
    "lawAndOrder" TEXT,

    CONSTRAINT "Settlement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_settlementNpcs" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Settlement_leaderId_key" ON "Settlement"("leaderId");

-- CreateIndex
CREATE UNIQUE INDEX "_settlementNpcs_AB_unique" ON "_settlementNpcs"("A", "B");

-- CreateIndex
CREATE INDEX "_settlementNpcs_B_index" ON "_settlementNpcs"("B");

-- AddForeignKey
ALTER TABLE "Settlement" ADD CONSTRAINT "Settlement_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "NPC"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_settlementNpcs" ADD CONSTRAINT "_settlementNpcs_A_fkey" FOREIGN KEY ("A") REFERENCES "NPC"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_settlementNpcs" ADD CONSTRAINT "_settlementNpcs_B_fkey" FOREIGN KEY ("B") REFERENCES "Settlement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
