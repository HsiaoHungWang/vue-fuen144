<script setup>
import { ref } from 'vue';

    const BASE_URL = import.meta.env.VITE_API_BASEURL

    const API_URL = `${BASE_URL}/Categories` //'https://localhost:7259/api/Categories'
    const category = ref({
        categoryId:0,
        categoryName:""
    })
    const categories = ref([])

    //讀取Categories資料
    const loadCategories = async()=>{
         const response = await fetch(API_URL)
         const datas = await response.json()
         console.log(datas)
         categories.value = datas         
    }

    //新增分類資料
    const addCategory = async()=>{
       // console.log(category.value)
       const response = await fetch(API_URL,{
        method:'POST',
        body:JSON.stringify(category.value),
        headers:{'Content-Type':'application/json'}
       })
     
       if(response.ok){
        loadCategories()
       }else{
        alert('新增失敗')
       }
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
        <div class="col-8">
            <div class="input-group mb-3">
       <input type="text" class="form-control" v-model="category.categoryName" />
       <button @click="addCategory" class="btn btn-primary">新增分類</button>
</div>
            
        </div>
      </div>
    </div>
</template>

<style lang="css" scoped>

</style>