// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCme-qHaU8P5RyzZCIv_64XPzQoKhj6CqY",
    authDomain: "electric-house-13aef.firebaseapp.com",
    projectId: "electric-house-13aef",
    storageBucket: "electric-house-13aef.appspot.com",
    messagingSenderId: "1032505902684",
    appId: "1:1032505902684:web:d53119ddaa977ca3154899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;