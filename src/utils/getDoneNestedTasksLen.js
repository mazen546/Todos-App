export const getDoneNestedTasksLen = (nestedTasks) => {
  let counter = 0;
  nestedTasks.forEach((e) => {
    if (e.isDone) {
      counter++;
    }
  });
  return counter;
};
