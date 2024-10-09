<script setup>
import { ref } from 'vue';
    
const message = ref('<p>Hello World!!</p>')
const isLoading = ref(true)
const isLoggedIn = ref(true)
const username = ref('Tom')

setTimeout(()=>{
    isLoading.value = false    
},3000)

</script>

<template>
    <div>
    <h2>Directives 練習</h2>
    <p>{{ message }}</p>
    <p v-text="message"></p>
    <div v-html="message"></div>
    <img src="/loading.gif" alt="loading" v-show="isLoading" />

    <div v-if="isLoggedIn">
        <p>歡迎 {{ username }}</p>
        <button @click="isLoggedIn=!isLoggedIn">登出</button>
    </div>
    <div v-else>
        <p>請先 <button  @click="isLoggedIn=!isLoggedIn">登入</button></p>
    </div>
   
    </div>
</template>

<style lang="css" scoped>

</style>