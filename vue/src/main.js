import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { router } from './routers'
import axios from 'axios'

loadFonts()

// createApp(App)
//   .use(vuetify)
//   .mount('#app')

const app = createApp(App)

app.config.globalProperties.axios = axios
app.config.globalProperties.foo = 'bar';

app.use(router)
app.use(vuetify)
app.use(axios)
app.mount('#app')