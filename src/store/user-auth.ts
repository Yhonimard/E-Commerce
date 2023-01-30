import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { TAuthFormInput } from "../components/models/global-model";
import { auth } from "../firebase/firebase";

export const signUser = ({ email, password }: TAuthFormInput) => {
  return async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      onAuthStateChanged(auth, (user) => {});
    } catch (error) {}
  };
};

export const signupUser = ({ email, password }: TAuthFormInput) => {
  return async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {}
  };
};
