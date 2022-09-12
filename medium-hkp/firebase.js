// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeZ-ojGZ-M8QDl3sBbyEMW10zuEpHUKIw",
    authDomain: "medium-clone-ebf80.firebaseapp.com",
    projectId: "medium-clone-ebf80",
    storageBucket: "medium-clone-ebf80.appspot.com",
    messagingSenderId: "543052183843",
    appId: "1:543052183843:web:47015ca65de29c62aab496",
    measurementId: "G-8D5XCR96HN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
