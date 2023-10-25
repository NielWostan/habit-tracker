-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Habits" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "day1" BOOLEAN NOT NULL,
    "day2" BOOLEAN NOT NULL,
    "day3" BOOLEAN NOT NULL,
    "day4" BOOLEAN NOT NULL,
    "day5" BOOLEAN NOT NULL,
    "day6" BOOLEAN NOT NULL,
    "day7" BOOLEAN NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Habits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Habits" ADD CONSTRAINT "Habits_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
