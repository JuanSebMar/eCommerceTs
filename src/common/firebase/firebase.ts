// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjqLOOYNxpUQGFouInxQef4k-l3Doqa6A",
  authDomain: "ecommerts.firebaseapp.com",
  projectId: "ecommerts",
  storageBucket: "ecommerts.appspot.com",
  messagingSenderId: "13441050817",
  appId: "1:13441050817:web:b615d5286ef658c69b8c40",
  measurementId: "G-R1V5NT5VP7"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);