import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseService";

export const signIn = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      handleErrors(error);
    });
};

const handleErrors = (error) => {
  throw error;
}

export default { signIn };
