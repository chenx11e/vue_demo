import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import store from './view/communication/vuex/store'
import store from './view/communication/pinia/store'
// import { Directive } from 'vue'

import focus from './view/v-focus/focus.js'

import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.directive('focus1', focus)

app.use(pinia)
app.use(store)

app.mount('#app')


