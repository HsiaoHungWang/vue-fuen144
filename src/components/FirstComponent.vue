<template>
    <h2>{{ message }}</h2>
    <input type="text" v-model="message" />
   <!-- <img src="/public/cat.jpg" alt="cat1" /> 會經過打包-->
    <img src="/cat.jpg" alt="cat2" /><!--不會經過打包-->
</template>
<style scoped>
h2{
    color:green;
}
</style>
<!-- Options API -->
<!-- <script>
export default{
    data(){
        return {message:'My First Component!!'}
    }
}
</script> -->

<script setup>
import { ref } from 'vue';

const message = ref("My First Component!!!")
</script>