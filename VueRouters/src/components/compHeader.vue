<template>
  <ul class="nav container bg-dark">
      <li class="nav-item"> <router-link v-bind:to="'/'+ id[0]" class="nav-link"> home </router-link> </li>
      <li class="nav-item">  <router-link v-bind:to="'/body'+id[1]" class="nav-link"> body1 </router-link> </li>
  </ul>
</template>
<script>

import compBody from './compBody'
import compBody1 from './compBody1'
export default {
    data() {
        return {
            id: [1, 2]
        }
    },
    components: {
        compBody,
        compBody1
    }
}
</script>

<style>

</style>