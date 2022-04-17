// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQXdbLABYoC8xgiMonJXm9rFjua8GzdU",
  authDomain: "dr-afra.firebaseapp.com",
  projectId: "dr-afra",
  storageBucket: "dr-afra.appspot.com",
  messagingSenderId: "94238834971",
  appId: "1:94238834971:web:b2d638ad4cf436c08393be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;