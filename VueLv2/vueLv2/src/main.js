import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routers from './routers'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: Routers
})

Vue.filter('upperCase', function(value) {
    return value.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
