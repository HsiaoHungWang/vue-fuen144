import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')


// const vueApp = createApp(App)
// vueApp.use(router)
// vueApp.use(pinia)
// vueApp.mount('#app')

