export function getTitle(habitId) {
  switch (habitId) {
    case 4:
      return "Reading";
    case 3:
      return "Journal";
    case 2:
      return "Workout";
    case 1:
      return "Meditation";
    default:
      alert("Error");
      break;
  }
}
