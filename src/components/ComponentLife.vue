<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';
let theP = null
theP = document.getElementById('p1')
console.log('setup', theP)

    onBeforeMount(()=>{
        console.log('組件掛載前')
        theP = document.getElementById('p1')
        console.log('beforeMount：', theP)
    })
    //DOM 產生會觸發 onMounted hook
    //所以要透過 DOM API 控制 DOM，程式要寫在這裡
    onMounted(()=>{
        console.log('組件掛載後')
        theP = document.getElementById('p1')      
        console.log('mounted：', theP)
    })

    onBeforeUpdate(()=>{
        console.log('組件更新前')      
    })
    onUpdated(()=>{
        console.log('組件更新後')    
    })
</script>

<template>
    <div>
       <p id="p1">Component Life Cycle</p>
    </div>
</template>

<style lang="css" scoped>

</style>