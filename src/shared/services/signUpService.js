import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseService";

export const signUp = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      handleErrors(error);
    });

}

const handleErrors = (error) => {
  throw error;
}


export default { signUp };
