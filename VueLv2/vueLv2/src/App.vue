<template>
  <div id="app" class="container">
    <button class="btn btn-danger" @click="changeAll">
      change title header and footer
    </button>
    <br />
    <img src="./assets/logo.png" />
    <compHeader
      v-bind:dataToHeader="dataToHeader"
      v-bind:listItem="listItem"
      v-on:getRequestFromCompHeader="closeBlock"
    ></compHeader>
      <router-view 
       v-bind:dataToHeader="dataToHeader"
      v-bind:listItem="listItem"
      v-on:getRequestFromCompHeader="closeBlock"
      ></router-view>
      <compBody></compBody>
    <compFooter
      v-bind:dataToFooter="dataToFooter"
      v-on:changeByFooterBtn="changeText"
    ></compFooter> 
  
   
  </div>
</template>

<script>
import compHeader from "./Components/compHeaders";
import compFooter from './Components/compFooter';
import compBody from "./Components/compBody";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      dataToHeader: "this is props to header",
      dataToFooter: "this is props to footer",
      listItem: [
        { id: 101, name: "banana", price: 3000 },
        { id: 102, name: "orange", price: 4000 },
        { id: 103, name: "grape", price: 5500 },
        { id: 104, name: "apple", price: 10500 },
        { id: 105, name: "kiwi", price: 7500 },
        { id: 106, name: "mango", price: 7500 },
        { id: 107, name: "watermelon", price: 3500 },
        { id: 108, name: "pear", price: 2500 },
        { id: 109, name: "coconut", price: 1500 }
      ]
    };
  },
  methods: {
    changeAll: function() {
      this.dataToHeader = "has already changed  by app.vue";
      this.dataToFooter = "has already changed  by app.vue";
    },
    changeText: function() {
      this.dataToFooter = "has already changed by footer btn";
      this.dataToHeader = "has already changed by footer btn";
    },
    closeBlock: function(data) {
      this.listItem.splice(data, 1);
      console.log(`this is data: ${data}`);
    }
  },
  components: {
    compHeader,
    compFooter,
    compBody
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
