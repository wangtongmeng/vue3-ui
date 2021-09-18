import { createApp } from 'vue'
import App from './App.vue'

import vue3UI from 'vue3-ui'
import '@vue3-ui/theme-chalk/index.scss'

// 创建应用 并使用组件库
createApp(App).use(vue3UI).mount('#app')