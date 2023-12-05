-- CreateTable
CREATE TABLE "RollTable" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "RollTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RollTableItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rollTableId" INTEGER NOT NULL,

    CONSTRAINT "RollTableItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RollTableItem_rollTableId_key" ON "RollTableItem"("rollTableId");

-- AddForeignKey
ALTER TABLE "RollTable" ADD CONSTRAINT "RollTable_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RollTableItem" ADD CONSTRAINT "RollTableItem_rollTableId_fkey" FOREIGN KEY ("rollTableId") REFERENCES "RollTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
