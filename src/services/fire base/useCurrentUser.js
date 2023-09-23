import { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/auth";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
};

export default useCurrentUser;
