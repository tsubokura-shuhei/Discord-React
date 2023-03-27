import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_ysQwcv6AytAepFFsZFEWyQDfRBHUQ9A",
  authDomain: "discord-clone-6c131.firebaseapp.com",
  projectId: "discord-clone-6c131",
  storageBucket: "discord-clone-6c131.appspot.com",
  messagingSenderId: "37023540701",
  appId: "1:37023540701:web:571e67aee1add524ef4234",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
