-- CreateEnum
CREATE TYPE "FolderType" AS ENUM ('ROOT', 'SUB');

-- AlterTable
ALTER TABLE "record" ADD COLUMN     "folder_type" "FolderType" NOT NULL DEFAULT E'ROOT';
