// import './assets/main.css'
//引入初始化样式文件
import './styles/common.scss'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import BaiduMap  from 'vue-baidu-map-3x'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// app.use(createPinia())
app.use(router)
app.use(BaiduMap, {
    ak:"ux7hWnj5TKKEnMUU1xWUglPleitcu72H"
})
app.mount('#app')
