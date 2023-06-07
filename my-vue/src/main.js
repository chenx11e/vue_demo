import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import store from './view/communication/vuex/store'
import store from './view/communication/pinia/store'

const app=createApp(App)
app.use(store)
app.mount('#app')
