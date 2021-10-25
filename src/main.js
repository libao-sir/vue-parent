import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import { registerMicroApps, start} from 'qiankun'

Vue.config.productionTip = false


Vue.use(Antd)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

registerMicroApps([
  {
    name: 'bi',
    entry: '//localhost:8081',
    container: '#sub',
    activeRule: '/bi',
  }
]);

start();