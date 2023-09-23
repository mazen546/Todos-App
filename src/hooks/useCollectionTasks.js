import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCollectionTasks = (collectionId) => {
  const [tasks, setTasks] = useState(null);
  const { collections } = useSelector((store) => store.collections);
  useEffect(() => {
    setTasks(
      collections.find((collection) => collection.id === collectionId).tasks
    );
  }, [collectionId, collections]);
  return tasks;
};
