import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './app/App.vue'
const app = createApp(App)

app.config.warnHandler = function (msg, vm, trace) {
    return null
}

// Vue cookie
import VueCookies from 'vue-cookies'
app.use(VueCookies)

// Router
import router from './router'
app.use(router)

// Store
import Store from './store'
app.use(Store)

// Event bus
import mitt from 'mitt'
const emitter = mitt()
app.config.globalProperties.emitter = emitter

// Lazy Load
import VueLazyload from 'vue-lazyload'
import loadImage from './assets/logo.svg'
app.use(VueLazyload, { loading: loadImage })

// Boostrap
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
app.use(bootstrap)

//Element UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)


app.mount('#app')
