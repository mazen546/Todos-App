import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useCollection = (collectionId) => {
  const [collection, setCollection] = useState(null);
  const { collections } = useSelector((store) => store.collections);
  useEffect(() => {
    setCollection(
      collections.find((collection) => collection.id === collectionId)
    );
  }, [collectionId, collections]);
  return collection;
};
