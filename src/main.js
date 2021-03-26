import Vue from 'vue';
import VueHead from 'vue-head';
import App from './App.vue';
import router from './router';
import VueGtag from "vue-gtag";

Vue.use(VueHead)

Vue.use(VueGtag, {
  config: { id: "UA-12981294-1" }
}, router);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
