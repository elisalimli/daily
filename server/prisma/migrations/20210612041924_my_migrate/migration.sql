/*
  Warnings:

  - You are about to drop the column `parentId` on the `folder` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `record` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "folder" DROP COLUMN "parentId",
ADD COLUMN     "rootId" TEXT;

-- AlterTable
ALTER TABLE "record" DROP COLUMN "parentId",
ADD COLUMN     "rootId" TEXT;

-- DropEnum
DROP TYPE "FolderType";

-- DropEnum
DROP TYPE "RecordType";

-- AddForeignKey
ALTER TABLE "record" ADD FOREIGN KEY ("rootId") REFERENCES "folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
