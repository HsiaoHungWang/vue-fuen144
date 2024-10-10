<script setup>
import { ref } from 'vue';

    const newTodo = ref('')
    
    //觸發父組件的事件
    const emit = defineEmits(['addTodo'])
    const enterHandler = () =>{
        emit('addTodo', newTodo.value)
        newTodo.value=''
    }
</script>

<template>
    <div>
        <input type="text" v-model.trim="newTodo" @keyup.enter="enterHandler" class="form-control" autofocus autocomplete="off" placeholder="子組件想要做甚麼?">
    </div>
</template>

<style lang="css" scoped>

</style>