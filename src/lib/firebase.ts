// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0LVBCZggxFjVwLEvnx3Q4iiHDM4lkg5M",
  authDomain: "kayunusa-652d2.firebaseapp.com",
  projectId: "kayunusa-652d2",
  storageBucket: "kayunusa-652d2.firebasestorage.app",
  messagingSenderId: "281330641620",
  appId: "1:281330641620:web:660ecaa419642dfb106941",
  measurementId: "G-MY8TMCSDNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);