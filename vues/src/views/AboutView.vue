<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBa2djPq0QhVTxpiWNxKz3JmmIG0YZDJZ0",

  authDomain: "blah-23b05.firebaseapp.com",

  projectId: "blah-23b05",

  storageBucket: "blah-23b05.appspot.com",

  messagingSenderId: "707148373267",

  appId: "1:707148373267:web:102bfd1c47112b36870ee6",

  measurementId: "G-C3RWTQ76JG"
})
const auth = getAuth(firebaseApp);
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
