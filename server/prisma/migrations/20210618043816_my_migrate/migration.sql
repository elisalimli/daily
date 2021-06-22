/*
  Warnings:

  - You are about to drop the column `unit` on the `record` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "file" ADD COLUMN     "unit" TEXT NOT NULL DEFAULT E'km';

-- AlterTable
ALTER TABLE "record" DROP COLUMN "unit";
