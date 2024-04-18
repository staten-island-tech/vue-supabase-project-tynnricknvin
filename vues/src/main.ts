import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
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