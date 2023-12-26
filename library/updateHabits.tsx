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
  }
}
// 1. add a habit
// 2. delete a habit
// 3. add progress
// 4. drop progress
