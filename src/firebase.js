// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX69y-PISzmnlr4lzbcxhdP-fZYurr_g4",
  authDomain: "dounts-3b43f.firebaseapp.com",
  databaseURL: "https://dounts-3b43f-default-rtdb.firebaseio.com",
  projectId: "dounts-3b43f",
  storageBucket: "dounts-3b43f.appspot.com",
  messagingSenderId: "742063927284",
  appId: "1:742063927284:web:c84fdbe0455a152b30d3a1",
  measurementId: "G-FBNB5SKQLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
