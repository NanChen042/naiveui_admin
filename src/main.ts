import './assets/main.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { setupPermissionDirective } from './directives/permission'

const app = createApp(App)

app.use(store)
app.use(router)
setupPermissionDirective(app)

app.mount('#app')
