/*
  Warnings:

  - You are about to drop the column `rootId` on the `file` table. All the data in the column will be lost.
  - You are about to drop the column `rootId` on the `folder` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "file" DROP CONSTRAINT "file_rootId_fkey";

-- AlterTable
ALTER TABLE "file" DROP COLUMN "rootId",
ADD COLUMN     "root_id" TEXT;

-- AlterTable
ALTER TABLE "folder" DROP COLUMN "rootId",
ADD COLUMN     "root_id" TEXT;

-- AddForeignKey
ALTER TABLE "file" ADD FOREIGN KEY ("root_id") REFERENCES "folder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
