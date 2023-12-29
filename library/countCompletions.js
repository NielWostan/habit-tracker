export function countCompletions(listOfObjs, ref) {
  let count = 0;
  switch (ref) {
    case 0:
      for (let i = 0; i < listOfObjs.length; i++) {
        count += listOfObjs[i].completedList.length;
      }
      break;
    case 1:
      for (let i = 0; i < listOfObjs.length; i++) {
        if (listOfObjs[i].habitId == 1) {
          count += listOfObjs[i].completedList.length;
        }
      }
      break;
    case 2:
      for (let i = 0; i < listOfObjs.length; i++) {
        if (listOfObjs[i].habitId == 2) {
          count += listOfObjs[i].completedList.length;
        }
      }
      break;
    case 3:
      for (let i = 0; i < listOfObjs.length; i++) {
        if (listOfObjs[i].habitId == 3) {
          count += listOfObjs[i].completedList.length;
        }
      }
      break;
    case 4:
      for (let i = 0; i < listOfObjs.length; i++) {
        if (listOfObjs[i].habitId == 4) {
          count += listOfObjs[i].completedList.length;
        }
      }
      break;
  }
  if (ref == 0) {
  }
  return count;
}
