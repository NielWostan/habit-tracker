export async function POST(newHabitName,currentUserId) {
    const data = await prisma.Habits.create({
        data: {
            title: newHabitName,
            day1: false,
            day2: false,
            day3: false,
            day4: false,
            day5: false,
            day6: false,
            day7: false,
            projectId: currentUserId
        }
    })
    return data
}