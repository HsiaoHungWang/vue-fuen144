<script setup>
import { ref, watch, watchEffect } from 'vue';

    const formatTime = (today) =>{
       const hours = String(today.getHours()).padStart(2,'0')
       const minutes = String(today.getMinutes()).padStart(2,'0')
       const seconds = String(today.getSeconds()).padStart(2,'0')
       return `${hours}:${minutes}:${seconds}`
    }
    const clock = ref(formatTime(new Date()))
    const clock1 = ref({
        day: new Date().getDate(),
        theTime: formatTime(new Date())
    })

    setInterval(()=>{
        clock.value = formatTime(new Date())
        clock1.value.theTime = formatTime(new Date())
    },2000)

    //watch()
    //第一次組件載入時不會執行
    // watch(clock, (newData, oldData)=>{
    //      console.log("new：", newData)
    //      console.log("old：", oldData)
    // } )

    //  //加上 immediate:true，第一次組件載入時會執行
    //  watch(clock, (newData, oldData)=>{
    //      console.log("new：", newData)
    //      console.log("old：", oldData)
    // },{immediate:true}) //, once:true

     //加上 immediate:true，第一次組件載入時會執行
     //watch無法監聽物件資料的改變，如果要監聽物件資料的改變要加上 deep:true
    //  watch(()=>clock1.value.theTime, (newData, oldData)=>{
    //     //  const cloneData = JSON.parse(JSON.stringify(oldData))
    //     //  console.log(cloneData.value.theTime)
    //      console.log("new：", newData.value.theTime)
    //      console.log("old：", oldData.value.theTime)
    //     console.log("new：", newData)
    //      console.log("old：", oldData)
    //      //串接API
    //      //fetch()
    //      //DOM 
    // },{deep:true}) 

    //vue3 有個watch簡化版 - watchEffect
    // watchEffect(()=>{
    //     console.log('clock：', clock.value)
    //     console.log('clock1：', clock1.value.theTime)
    // })


</script>

<template>
   {{ clock }} {{ clock1.theTime }}
</template>

<style lang="css" scoped>

</style>