<template>
  <div class="demo-products col-2 border m-1">
    {{product.name}}
    <button
      class="btn btn-danger btn-demo-products"
      @click="sendRequestToCompHeader"
      v-bind:data-pos="pos"
    >close</button>
  </div>
</template>

<script>
export default {
  name: "products",
  props: {
    product: {
      type: Object,
      default: {},
    },
    pos: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    sendRequestToCompHeader: function (event) {
      let data = parseInt(event.target.dataset.pos);
      this.$emit("getRequestFromProducts", data);
    },
  },
};
</script>

<style>
.demo-products {
  height: 120px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
.btn-demo-products {
  position: absolute;
  top: 0;
  right: 0;
}
</style>