// Import Vue
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

// Import F7 iOS Theme Styles
//import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
//import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
// Import App Custom Styles
//import AppStyles from './assets/sass/main.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
