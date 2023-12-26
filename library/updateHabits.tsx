export function updateHabits(
  data: any[],
  operation: string,
  habitId?: number,
  id?: number,
  date?: string,
  i?: number
) {
  switch (operation) {
    case "add": {
      // to build
    }
    case "delete": {
      let returnData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].id != id) {
          returnData.push(data[i]);
        }
      }
      return returnData;
    }
    case "check": {
      let returnData = [...data];
      const temp = data[i].completedList.indexOf(date);
      if (temp == -1) {
        returnData[i].completedList.push(date);
      }
      return returnData;
    }
    case "uncheck": {
      let returnData = [...data];
      const temp = data[i].completedList.indexOf(date);
      if (temp != -1) {
        returnData[i].completedList.splice(temp, 1);
      }

      return returnData;
    }
  }
}
// 1. add a habit
// 2. delete a habit
// 3. add progress
// 4. drop progress
