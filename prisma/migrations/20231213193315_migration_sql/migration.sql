/*
  Warnings:

  - You are about to drop the column `day1` on the `Habits` table. All the data in the column will be lost.
  - You are about to drop the column `day2` on the `Habits` table. All the data in the column will be lost.
  - You are about to drop the column `day3` on the `Habits` table. All the data in the column will be lost.
  - You are about to drop the column `day4` on the `Habits` table. All the data in the column will be lost.
  - You are about to drop the column `day5` on the `Habits` table. All the data in the column will be lost.
  - You are about to drop the column `day6` on the `Habits` table. All the data in the column will be lost.
  - You are about to drop the column `day7` on the `Habits` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Habits" DROP COLUMN "day1",
DROP COLUMN "day2",
DROP COLUMN "day3",
DROP COLUMN "day4",
DROP COLUMN "day5",
DROP COLUMN "day6",
DROP COLUMN "day7",
ADD COLUMN     "completedList" TIMESTAMP(3)[];
