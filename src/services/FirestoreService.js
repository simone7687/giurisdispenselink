// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7i9jTZxnu7R_cM6UvbJmZOrkOFMW4-SY",
    authDomain: "giurisdispenselink.firebaseapp.com",
    projectId: "giurisdispenselink",
    storageBucket: "giurisdispenselink.appspot.com",
    messagingSenderId: "159915933490",
    appId: "1:159915933490:web:aaec5fbd18d2239cdb612b",
    measurementId: "G-1QKQKYJEBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db;