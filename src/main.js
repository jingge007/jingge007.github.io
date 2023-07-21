import Vue from 'vue'
import App from './App.vue'
import viewDesign from 'view-design';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'view-design/dist/styles/iview.css';

moment.locale('zh-cn');
const MomentPlugin = {
  install(Vue) {
    Vue.prototype.$moment = moment;
  },
};
Vue.use(MomentPlugin);

Vue.config.productionTip = false
Vue.use(viewDesign)
new Vue({
  render: h => h(App),
}).$mount('#app')