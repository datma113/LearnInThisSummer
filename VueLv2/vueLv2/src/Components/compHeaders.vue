<template>
  <div>
    <h1>
      {{text}}
      <br />
      {{dataToHeader}}
    </h1>
    <div class="row">
      <products
        v-for="(item, index) in listItem"
        v-bind:key="item.id"
        v-bind:product="item"
        v-on:getRequestFromProducts="sendRequestToApp"
        v-bind:pos="index"
      />
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import products from "./products";
export default {
  name: "component-headers",
  props: {
    dataToHeader: {
      type: String,
      default: "default",
    },
    listItem: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      text: "this is component header",
    };
  },
  methods: {
    sendRequestToApp: function (data) {
      this.$emit("getRequestFromCompHeader", data);
    },
  },
  components: {
    products,
  },
};
</script>

<style>
h1 {
  color: #42b983;
}
</style>