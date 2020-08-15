import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.filter('upperCase', function(value) {
    return value.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
