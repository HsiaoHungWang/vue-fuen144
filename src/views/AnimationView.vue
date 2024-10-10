<script setup>
import { ref } from 'vue';

    const show =ref(true)
</script>

<template>
    <div>
        <button @click="show = !show">Toggle</button>
        <Transition>
            <p v-if="show">Hello Animate</p>
        </Transition>

        


    </div>
</template>

<style lang="css" scoped>
.v-enter-active, .v-leave-active {
    transition: all 2s ease;
}
.v-enter-from, .v-leave-to {
    opacity: 0;
    transform: translateX(130px);
}

</style>