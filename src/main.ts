import { createApp } from 'vue'
import { store } from './store'
import { i18n } from './locale'

// normalize.css
import 'normalize.css/normalize.css'

import './styles/index.less'

// tailwindcss
import './styles/tailwind.css'

// svg icon
import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
