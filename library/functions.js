export async function pushHabit(habitId) {
  setTempHabits((prev) =>
    updateHabits(prev, "add", habitId, userId, null, tempId)
  ); // Update habits
  setTempId((prev) => prev - 1);
  const title = getTitle(habitId);
  await fetch("../api/addHabit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, habitId, userId }),
  });
  localStorage.setItem("habits", JSON.stringify([...habits, ...tempHabits]));
}
