import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import first from './plugins/first';
import tokyo from './tokyoNumber';
import nagoya from './nagoyo';

Vue.config.productionTip = false


Vue.filter('toApper', function (value) {
  return value.toUpperCase();
})

Vue.mixin(tokyo)

Vue.use(first, { hello: 'こんにちは', world: '世界' })


new Vue({
  router,
  store,
  vuetify,
  mixins:[nagoya],
  render: h => h(App)
}).$mount('#app')
