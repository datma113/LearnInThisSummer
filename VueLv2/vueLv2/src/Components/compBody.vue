<template>
  <div>
    <p>{{ text | upperCase}} x {{ text }}</p>
    <p>{{ text }} x {{ text }} </p>
    <p>{{ text }} x {{ text| upperCase }}</p>
  </div>
</template>

<script>
export default {
  name: "compBody",
  data() {
    return {
      text: "lorem lorem lorem",
    };
  },
};
</script>

<style></style>
