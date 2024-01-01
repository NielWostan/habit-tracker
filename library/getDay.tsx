export function getDay(offset: number) {
  const date = new Date();
  const arrayOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const day = date.getDay() + offset;
  if (day < 0) {
    return arrayOfDays[7 + day];
  } else {
    return arrayOfDays[day];
  }
}
