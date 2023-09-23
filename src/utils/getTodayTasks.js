import {
  updateNestedTask,
  updateTask,
} from "../feature/collections/collectionsSlice";
import { getDeadLine } from "./getDeadline";

export const getTodayTasks = (collection) => {
  const todayTasks = [];
  collection.tasks.forEach((task) => {
    if (getDeadLine(task.endDate) === "Today" && !task.isDone) {
      todayTasks.push({
        id: task.id,
        title: task.title,
        endDate: task.endDate,
        update: updateTask,
        isDone: task.isDone,
        collectionId: collection.id,
        mainTaskId: task.id,
        checkBoxColor: collection.color,
      });
    }
    task.nestedTasks.forEach((subTask) => {
      if (getDeadLine(subTask.endDate) === "Today" && !subTask.isDone) {
        todayTasks.push({
          id: subTask.id,
          update: updateNestedTask,
          isDone: subTask.isDone,
          title: subTask.title,
          endDate: subTask.endDate,
          color: collection.color,
          mainTaskId: task.id,
          subTaskId: subTask.id,
          collectionId: collection.id,
        });
      }
    });
  });
  return todayTasks;
};
