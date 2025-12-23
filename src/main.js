import './assets/main.css'

import 'bulma'
import '@glidejs/glide'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import loadSetup from './loadsetup.js'

// import locales from './locales.js'

const app = createApp(App)

app.use(loadSetup)
app.use(router)

// app.use(locales)

app.mount('#app')
