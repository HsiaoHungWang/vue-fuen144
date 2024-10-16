<script setup>
import { ref, watchEffect } from 'vue'

const BASE_URL = import.meta.env.VITE_API_BASEURL
const API_URL = `${BASE_URL}/categories`

const categories = ref([])
const categoryId = ref(0)
const emit = defineEmits(["categoryClick"])
const clickHandler = id => {
    categoryId.value = id
    emit("categoryClick", id)
}


watchEffect(async () => {
    console.log('watchEffect')

    //用 fetch() 呼叫 API
    const response = await fetch(API_URL)
    const datas = await response.json();
    categories.value.push(...datas)
    console.log(categories)

})
</script>

<template>
    <div>
        <ul v-if="categories && categories.length > 0" class="list-group list-group-horizontal">
            <li :class="{ 'current': category.categoryId == categoryId, 'list-group-item': true }"
                v-for="category in categories" :key="category.categoryId" @click="clickHandler(category.categoryId)">
                <button type="button" class="btn">{{ category.categoryName }}</button>
            </li>
        </ul>

    </div>
</template>

<style lang="css" scoped>
.current {
    background-color: lightblue;
}
</style>