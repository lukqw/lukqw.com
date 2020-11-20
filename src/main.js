import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin, CardPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faRaspberryPi, faVuejs, faJava, faRedditAlien, faSwift, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faGithub, faRaspberryPi, faVuejs, faJava, faRedditAlien, faSwift, faReact, faNodeJs)
library.add(faGlobe)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CardPlugin)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
