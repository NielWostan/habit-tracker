/*
  Warnings:

  - Made the column `title` on table `Habits` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Habits" ALTER COLUMN "title" SET NOT NULL;
