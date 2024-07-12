// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdNpgp8yICztvfj26x7MViemxH8Zhzhno",
  authDomain: "alibia-b1ffb.firebaseapp.com",
  projectId: "alibia-b1ffb",
  storageBucket: "alibia-b1ffb.appspot.com",
  messagingSenderId: "691551082368",
  appId: "1:691551082368:web:11876fa399f2221b325365",
  measurementId: "G-W5HCKMM1TG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const imageDB = getStorage(app);
