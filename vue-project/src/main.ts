import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
const poop = 
    "lalala"
console.log(poop)
import { createClient } from '@supabase/supabase-js'

// Use a custom domain as the supabase URL
const supabase = createClient('https://ricky-domain.com', 'public-anon-key')