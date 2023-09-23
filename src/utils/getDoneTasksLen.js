export const getDoneTasksLength = (tasks) => {
  // console.log(collection.tasks.length);
  let counter = 0;
  tasks.forEach((task) => {
    if (task.isDone) {
      counter++;
      counter += task.nestedTasks.length;
    }
  });
  console.log(counter);
  return counter;
};
