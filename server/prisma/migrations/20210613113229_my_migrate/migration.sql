/*
  Warnings:

  - You are about to drop the `record` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "record" DROP CONSTRAINT "record_creator_id_fkey";

-- DropForeignKey
ALTER TABLE "record" DROP CONSTRAINT "record_rootId_fkey";

-- DropTable
DROP TABLE "record";

-- CreateTable
CREATE TABLE "file" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rootId" TEXT,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "file" ADD FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "file" ADD FOREIGN KEY ("rootId") REFERENCES "folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
