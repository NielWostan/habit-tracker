export function getDate(offset: number) {
  const date = new Date();
  const mm = date.getMonth() + 1;
  const dd = date.getDate() - offset;
  const yyyy = date.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}
