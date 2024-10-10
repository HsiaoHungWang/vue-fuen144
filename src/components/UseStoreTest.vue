<script setup>
    import { useCounterStore } from '@/stores/counter';
    const storeCounter = useCounterStore()

    
</script>

<template>
    <div>
     <h2 @click="storeCounter.add()">使用 Pinia 範例 {{ storeCounter.count }}</h2>
    </div>
</template>

<style lang="css" scoped>

</style>