import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLkh0mWcw8LCYSZSrSn9UJkjj8s_8tYao",
  authDomain: "react-getting-started-57a9a.firebaseapp.com",
  databaseURL:
    "https://react-getting-started-57a9a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-getting-started-57a9a",
  storageBucket: "react-getting-started-57a9a.appspot.com",
  messagingSenderId: "854478055045",
  appId: "1:854478055045:web:16e4c6dbf8d9dfd50eebec"
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
