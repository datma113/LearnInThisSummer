<template>
    <div>
        <button class="btn btn-primary" @click="changeText">change </button>
       <h1>{{ dataToFooter }}</h1> 
      <h2 class="text-dark">
        {{text}}
    </h2>
    
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
export default {
    name: 'compFooter',
    props: {
        dataToFooter: {
            type: String,
            default: 'default '
        }
    },
    data() {
        return {
            text: 'this is component footer'
        }
    },
    methods: {
        changeText: function(e) {
            this.$emit("changeByFooterBtn");
        }
    }
}
</script>


<style>

    *{
        color: blue;
    }
</style>