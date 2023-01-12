// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "api-project-vcpmc.firebaseapp.com",
  projectId: "api-project-vcpmc",
  storageBucket: "api-project-vcpmc.appspot.com",
  messagingSenderId: "4991363004",
  appId: "1:4991363004:web:b6ebd3282c43a7c9592db9",
  measurementId: "G-HV6BN7Q5TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);