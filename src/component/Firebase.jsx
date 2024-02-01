// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4ihvqhkSWEyX89JC9xi2ox5RmCxFSzW4",
  authDomain: "shows-43b96.firebaseapp.com",
  projectId: "shows-43b96",
  storageBucket: "shows-43b96.appspot.com",
  messagingSenderId: "1026107210760",
  appId: "1:1026107210760:web:0f7e4ad3db43373c54a5bd",
  measurementId: "G-WYQCL90VTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);