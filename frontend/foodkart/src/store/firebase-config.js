// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhUjuOHyaWwnxGd31_o91R5xIjCpo2iAg",
  authDomain: "foodkart-8b53a.firebaseapp.com",
  projectId: "foodkart-8b53a",
  storageBucket: "foodkart-8b53a.firebasestorage.app",
  messagingSenderId: "920706748324",
  appId: "1:920706748324:web:f06e5ba2171cc1e98afb31",
  measurementId: "G-3FH5FB47BE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "it";
export { auth };
