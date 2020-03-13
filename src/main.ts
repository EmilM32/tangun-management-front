import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// Own Components
import TCard from "@/components/theme/TCard.vue"

import i18n from './i18n'

Vue.component("t-card", TCard)


Vue.config.productionTip = false

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
