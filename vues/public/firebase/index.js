// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBa2djPq0QhVTxpiWNxKz3JmmIG0YZDJZ0",

  authDomain: "blah-23b05.firebaseapp.com",

  projectId: "blah-23b05",

  storageBucket: "blah-23b05.appspot.com",

  messagingSenderId: "707148373267",

  appId: "1:707148373267:web:102bfd1c47112b36870ee6",

  measurementId: "G-C3RWTQ76JG"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
