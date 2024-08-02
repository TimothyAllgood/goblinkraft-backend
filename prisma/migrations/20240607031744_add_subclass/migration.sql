-- CreateTable
CREATE TABLE "Subclass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "characterClassID" INTEGER NOT NULL,

    CONSTRAINT "Subclass_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Subclass" ADD CONSTRAINT "Subclass_characterClassID_fkey" FOREIGN KEY ("characterClassID") REFERENCES "CharacterClass"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
