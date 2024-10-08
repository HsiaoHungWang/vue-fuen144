<script setup>
import { reactive, ref } from 'vue';

    // const count1 = 0
    const count = ref(0) //{value:0}
    const obj = reactive({count:0})
    console.log(obj)
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
    count.value++;  //{value:1}
    console.log(count)
   
    const add = ()=>{
      count.value++
      obj.count++
    }
</script>

<template>
    <div>
<button @click="add">{{ count }}-{{ obj.count }}</button>
    </div>
</template>

<style lang="css" scoped>

</style>