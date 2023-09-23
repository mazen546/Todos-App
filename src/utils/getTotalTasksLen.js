export const getTotalTasksLength = (tasks) => {
  // console.log(collection.tasks.length);
  let counter = 0;
  counter = tasks.length;
  tasks.forEach((task) => {
    counter += task.nestedTasks.length;
  });
  // console.log(counter);
  return counter;
};
