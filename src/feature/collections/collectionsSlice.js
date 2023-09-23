import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/collectionData";
import {
  getDoneTasksLength,
  getTotalTasksLength,
  getUndoneTasksLength,
} from "../../utils";
const initialState = {
  collections: data,
};

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    addCollection: () => {},
    deleteCollection: () => {},
    // using collectionId and taskId
    updateTask: (state, { payload }) => {
      // console.log(payload);
      const { collectionId, mainTaskId } = payload;
      const collection = state.collections.find(
        (collection) => collection.id === collectionId
      );
      const task = collection.tasks.find((t) => t.id === mainTaskId);
      task.isDone = true;
      task.nestedTasks.forEach((nestedTask) => (nestedTask.isDone = true));
      collection.tasks = collection.tasks.filter(
        (task) => mainTaskId !== task.id
      );
      collection.completedTasks.push(task);
      collection.undone = getUndoneTasksLength(collection.tasks);
      collection.done = getDoneTasksLength(collection.completedTasks);
    },
    // using collectionId ,taskId and nestedTaskId
    updateNestedTask: (state, { payload }) => {
      const { collectionId, mainTaskId, subTaskId, checked } = payload;
      const collection = state.collections.find(
        (collection) => collection.id === collectionId
      );
      const task = collection.tasks.find((t) => t.id === mainTaskId);
      const subTask = task.nestedTasks.find((t) => t.id === subTaskId);
      subTask.isDone = checked;
      collection.undone = getUndoneTasksLength(collection.tasks);
    },
    // using collectionId
    updateTotalCollectionTasks: (state, { payload }) => {
      const collection = state.collections.find(
        (collection) => collection.id === payload.collectionId
      );
      collection.total = getTotalTasksLength(collection);
    },
    // using collectionId
  },
});
export const { updateTask, updateNestedTask } = collectionsSlice.actions;
export default collectionsSlice.reducer;
