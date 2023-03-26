import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from "./store";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
