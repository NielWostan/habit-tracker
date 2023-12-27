export function getStats(data: any) {
  let days = [];
  for (let i = 0; i < data?.length; i++) {
    days = days.concat(data[i].completedList);
  }
  let counter = {};
  for (let i = 0; i < days.length; i++) {
    if (!Object.keys(counter).includes(days[i])) {
      counter[days[i]] = days.filter((x) => x === days[i]).length;
    }
  }
  return counter;
}
