<script setup>
import { ref } from 'vue';

const emit = defineEmits(['searchInput'])
    const keyword = ref('')
    const inputHandler = ()=>{
emit('searchInput', keyword.value)
    }
</script>

<template>
    <div>
        <input type="search" @keyup.enter="inputHandler" v-model="keyword" placeholder="關鍵字搜尋" class="form-control mb-3">

    </div>
</template>

<style lang="css" scoped>

</style>