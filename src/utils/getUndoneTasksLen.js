export const getUndoneTasksLength = (tasks) => {
  // console.log(collection.tasks.length);
  let counter = 0;
  tasks.forEach((task) => {
    counter++;
    task.nestedTasks.forEach((subTask) => {
      if (!subTask.isDone) {
        counter++;
      }
    });
  });
  console.log(counter);
  return counter;
};
