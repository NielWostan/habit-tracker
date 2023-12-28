/*
  Warnings:

  - A unique constraint covering the columns `[count]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_count_key" ON "User"("count");
