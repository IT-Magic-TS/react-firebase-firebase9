import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = (email, password) => {
    console.log(email, password);
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log("User signed up: ", res.user);
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return { error, signup };
};
