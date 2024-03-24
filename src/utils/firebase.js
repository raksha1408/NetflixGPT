// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP6NsiQTyGebZSZzDaaHAz0jvO-AGJ4m8",
  authDomain: "netflixgpt-c9899.firebaseapp.com",
  projectId: "netflixgpt-c9899",
  storageBucket: "netflixgpt-c9899.appspot.com",
  messagingSenderId: "590430009878",
  appId: "1:590430009878:web:3f185d0ddb36a6f7b41337",
  measurementId: "G-G1VDQ789DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
export const auth = getAuth();