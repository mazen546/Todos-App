import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCollectionSubTasks = (collectionId, taskId) => {
  const [subTasks, setSubTasks] = useState(null);
  const { collections } = useSelector((store) => store.collections);

  useEffect(() => {
    setSubTasks(
      collections
        .find((collection) => collection.id === collectionId)
        .tasks.find((task) => task.id === taskId)
    );
  }, [collectionId, taskId, collections]);
  return subTasks;
};
