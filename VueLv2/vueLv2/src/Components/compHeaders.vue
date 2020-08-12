<template>
    <h1>
        {{text}}
    </h1>
</template>

<script>
export default {
    name: 'component-headers',
    data()  {
        return {
            text: 'this is component header'
        }
    }

}
</script>

<style>
    h1{
        color: #42b983;
    }
</style>