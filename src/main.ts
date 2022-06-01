import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import './styles/index.less'
// 导入svgIcon
import installIcons from '@/utils/importSvg'

const app = createApp(App)

installIcons(app)

app.use(router).use(store).mount('#app')
