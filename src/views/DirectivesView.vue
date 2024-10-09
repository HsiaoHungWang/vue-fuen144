<script setup>
import { ref } from 'vue';
    
const message = ref('<p>Hello World!!</p>')
const isLoading = ref(true)
const isLoggedIn = ref(true)
const username = ref('Tom')
const regions = ref([
    {"name":"新興區","code":800},
    {"name":"前金區","code":801},
    {"name":"苓雅區","code":802},
    {"name":"鹽埕區","code":803},
    {"name":"鼓山區","code":804}
])
const selectedOption = ref('802')

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
   
    <select v-model="selectedOption">
        <option v-for="(region, index) in regions" :key="region.code" :value="region.code">{{index}} {{region.name}}</option>      
    </select>
    <span>{{ selectedOption }}</span>
    </div>
</template>

<style lang="css" scoped>

</style>