<script setup>
import { nextTick, reactive, ref } from 'vue';

    // const count1 = 0
    // const count = ref(0) //{value:0}
    // const obj = reactive({count:0})
    // console.log(obj)
  //  console.log(count)
//    {
//     "dep": {
//         "version": 1,
//         "sc": 0
//     },
//     "__v_isRef": true,
//     "__v_isShallow": false,
//     "_rawValue": 1,
//     "_value": 1,
 //      "value":1
// }
    // count.value++;  //{value:1}
    // console.log(count)
   
    const count = ref(0) //{value:0}
    const add = async ()=>{
      count.value++

      //強迫馬上更新 Actual DOM
      await nextTick()

      //找到按鈕讀取按鈕的值
      const btn = document.querySelector('#button1')
      console.log(btn.textContent)
      //obj.count++
    }
</script>

<template>
    <div>
      <button id="button1" @click="add">{{ count }}</button>
<!--       
      <button @click="add">{{ count }}-{{ obj.count }}</button> -->
    
    </div>
</template>

<style lang="css" scoped>

</style>