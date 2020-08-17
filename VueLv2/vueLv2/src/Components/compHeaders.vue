<template>
  <div>
    <h1>
      {{ text }}
      <br />
      {{ dataToHeader }}
    </h1>
    <div class="row">
      <input type="text" class="form-control m-2" v-model="search" />
      <br />
      <div class="col-12 border" >
        <div class="row " v-if="searchList != 0">
          <products
            v-for="(item, index) in searchList"
            v-bind:key="item.id"
            v-bind:product="item"
            v-on:getRequestFromProducts="sendRequestToApp"
            v-bind:pos="index"
          />
        </div>
        
        <div v-else>
          <p class="text-danger">No Item match</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "./products";
export default {
  name: "component-headers",
  props: {
    dataToHeader: {
      type: String,
      default: "default"
    },
    listItem: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      text: "this is component header",
      search: ""
    };
  },
  methods: {
    sendRequestToApp: function(data) {
      this.$emit("getRequestFromCompHeader", data);
    }
  },
  computed: {
    searchList: function() {
      return this.listItem.filter(item => {
        return item.name.match(this.search);
      });
    }
  },
  components: {
    products
  }
};
</script>

<style>
h1 {
  color: #42b983;
}
</style>
