export function checkDate(counter: any, date: any): number {
  const formatDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  if (Object.keys(counter).includes(formatDate)) {
    return counter[formatDate];
  } else {
    return 0;
  }
}
