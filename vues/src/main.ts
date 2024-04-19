import { initializeApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInWithCustomToken,
  signOut,
} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBa2djPq0QhVTxpiWNxKz3JmmIG0YZDJZ0",

    authDomain: "blah-23b05.firebaseapp.com",
  
    projectId: "blah-23b05",
  
    storageBucket: "blah-23b05.appspot.com",
  
    messagingSenderId: "707148373267",
  
    appId: "1:707148373267:web:102bfd1c47112b36870ee6",
  
    measurementId: "G-C3RWTQ76JG"
};
initializeApp(firebaseConfig);
const auth = getAuth();



