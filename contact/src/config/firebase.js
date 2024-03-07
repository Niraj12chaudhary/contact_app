// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7qzNlmSlFDZ3UgWlXkOBCCU6T0M8Jkp0",
  authDomain: "vite-contact-b722e.firebaseapp.com",
  projectId: "vite-contact-b722e",
  storageBucket: "vite-contact-b722e.appspot.com",
  messagingSenderId: "262441767459",
  appId: "1:262441767459:web:e379236be4507b51409796"
};
 
// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);