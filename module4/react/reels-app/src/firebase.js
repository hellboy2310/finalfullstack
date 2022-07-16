// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5jNpmpoCzWSC7S30AUwHRQtmrHUj-7SQ",
  authDomain: "reel-c6fe6.firebaseapp.com",
  projectId: "reel-c6fe6",
  storageBucket: "reel-c6fe6.appspot.com",
  messagingSenderId: "29539566344",
  appId: "1:29539566344:web:7321815276964164c3e2bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth = getAuth(app);