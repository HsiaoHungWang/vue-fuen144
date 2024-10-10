<script setup>
   import { useTodoStore  } from '@/stores/todo';
   const todoStore = useTodoStore()

   //接收父組件的資料
    // const props = defineProps({
    //     remaining:Number
    // })

    //觸發父組件的事件
   const emit = defineEmits(['removeComplete'])
   const clickHandler =()=>{
      emit('removeComplete')
   }
</script>

<template>
      <div class="mt-3 d-flex justify-content-between">
                <strong class=" me-3">尚有 {{todoStore.qty}} 個工作未完成</strong>
                <button class="btn btn-warning me-3" @click="clickHandler">清除完成工作</button>
            </div>
</template>

<style lang="css" scoped>

</style>