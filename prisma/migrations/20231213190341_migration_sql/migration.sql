/*
  Warnings:

  - Added the required column `habitId` to the `Habits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habits" ADD COLUMN     "habitId" INTEGER NOT NULL;
