/*
  Warnings:

  - You are about to drop the column `folder_type` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `parentFolderId` on the `record` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `record` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "user.id_unique";

-- DropIndex
DROP INDEX "record.id_unique";

-- AlterTable
ALTER TABLE "record" DROP COLUMN "folder_type",
DROP COLUMN "parentFolderId",
DROP COLUMN "type",
ADD COLUMN     "parentId" TEXT;

-- CreateTable
CREATE TABLE "folder" (
    "id" TEXT NOT NULL,
    "parentId" TEXT,
    "name" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "folder" ADD FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
