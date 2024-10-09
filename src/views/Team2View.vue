<script setup>
import { computed, ref } from 'vue';

    const celsius = ref(0)

    const TempatureConvert = ()=>{
        console.log('method')
        return celsius.value *  9/5 +32
    }
   
    const fahrenheit = computed(()=>{
        console.log('computed')
        return celsius.value *  9/5 +32
    })
</script>

<template>
    <div>
        <h2>Team2 Page</h2>
        <p>攝氏：<input type="text" v-model.number="celsius" /></p>
        <p>華氏：{{ celsius *  9/5 +32}}</p>
        <p>華氏：{{ TempatureConvert() }}{{ TempatureConvert() }}{{ TempatureConvert() }}</p>
        <p>華氏：{{ fahrenheit }}{{ fahrenheit }}{{ fahrenheit }}{{ fahrenheit }}</p>
    </div>
</template>

<style lang="css" scoped>

</style>