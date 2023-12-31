import { getTitle } from "./getTitle";

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
      const returnData = [
        ...data,
        {
          id: i,
          habitId: habitId,
          count: i,
          title: getTitle(habitId),
          completedList: [],
          projectId: id,
        },
      ];
      return returnData;
    }
    case "delete": {
      let returnData = [];
      if (id > 0) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id != id) {
            returnData.push(data[i]);
          }
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].count != id) {
            returnData.push(data[i]);
          }
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
