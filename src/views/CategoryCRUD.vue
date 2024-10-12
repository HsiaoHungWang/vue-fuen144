<script setup>
import { ref } from 'vue';

    const BASE_URL = import.meta.env.VITE_API_BASEURL

    const API_URL = `${BASE_URL}/Categories` //'https://localhost:7259/api/Categories'
    const categories = ref([])

    //讀取Categories資料
    const loadCategories = async()=>{
         const response = await fetch(API_URL)
         const datas = await response.json()
         console.log(datas)
         categories.value = datas         
    }

    loadCategories()
</script>

<template>
    <div>
      <h2>分類管理</h2>
      <div class="row">
        <div class="col-4">
            <ul class="list-group">
                <li v-for="category in categories" :key="category.categoryId" class="list-group-item d-flex justify-content-between align-items-center">
                   {{ category.categoryName }}
                    <span class="badge text-bg-primary rounded-pill"></span>
                </li>         
            </ul>
        </div>
        <div class="col-8"></div>
      </div>
    </div>
</template>

<style lang="css" scoped>

</style>