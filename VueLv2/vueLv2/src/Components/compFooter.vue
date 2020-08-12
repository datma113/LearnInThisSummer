<template>
    <h2>
        {{text}}
    </h2>
</template>

<script>
export default {
    name: 'compFooter',
    data() {
        return {
            text: 'this is component footer'
        }
    }
}
</script>

<style>
    h2{
        color: blue;
    }
</style>