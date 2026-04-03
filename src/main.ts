import './assets/main.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './locales'
import { setupPermissionDirective } from './directives/permission'

// 如果是生产环境，且需要使用 Mock (默认暂时开启)
if (import.meta.env.PROD) {
  const { setupProdMockServer } = await import('../mock/_createProductionServer')
  setupProdMockServer()
}

const app = createApp(App)

app.use(store)
app.use(i18n)
app.use(router)
setupPermissionDirective(app)

app.mount('#app')
