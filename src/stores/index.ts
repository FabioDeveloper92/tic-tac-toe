import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'

// Crea l'istanza di Pinia
const pinia = createPinia()

// Crea e monta l'app Vue, passando Pinia
const app = createApp(App)
app.use(pinia)
app.mount('#app')
