<template>
    <h2>My First Component</h2>
   <!-- <img src="/public/cat.jpg" alt="cat1" /> 會經過打包-->
    <img src="/cat.jpg" alt="cat2" /><!--不會經過打包-->
</template>
<style scoped>
h2{
    color:green;
}
</style>
<script setup></script>