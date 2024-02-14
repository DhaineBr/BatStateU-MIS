import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as ConfirmDialog from 'vuejs-confirm-dialog';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
})

app.use(ConfirmDialog)
app.use(mdiVue, { icons: mdijs })
app.use(vuetify)
app.use(VCalendar)
app.use(router)
app.mount('#app')
