<script setup>
import { ref } from 'vue';

    const BASE_URL = import.meta.env.VITE_API_BASEURL

    const API_URL = `${BASE_URL}/Categories` //'https://localhost:7259/api/Categories'
    const btnText = ref('分類新增')
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

    //新增或修改分類資料
    const addCategory = async()=>{
        if(category.value.categoryId > 0){
           //修改
           updateCategory()
        }else{
            //新增
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
        clearData()
    }

    //刪除分類
    const deleteCategory = async(categoryId)=>{
        const response = await fetch(`${API_URL}/${categoryId}`,{
            method:'DELETE'
        })
        if(response.ok){
            loadCategories()
        }else{
            alert('刪除失敗')
        }
    }

    //修改分類
    const editCategory = item => {
category.value = item
btnText.value ='分類修改'
    }

    const updateCategory = async() =>{
        const response = await fetch(`${API_URL}/${category.value.categoryId}`,{
            method:'PUT',
            body:JSON.stringify(category.value),
            headers:{'Content-Type':'application/json'}
        })
        if(response.ok){
            loadCategories()
        }else{
            alert('修改失敗')
        }
    }

    const clearData = ()=>{
       btnText.value = '分類新增'
        category.value = {
            categoryId:0,
            categoryName:""
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

                   <div>
                    <span @click="editCategory(category)" class="badge text-bg-warning rounded-pill mx-1"><i class="bi bi-pencil-square"></i></span>


<span @click="deleteCategory(category.categoryId)" class="badge text-bg-danger rounded-pill">
    <i class="bi bi-trash-fill"></i>
</span>
                   </div>
                  
                </li>         
            </ul>
        </div>
        <div class="col-8">
            <div class="input-group mb-3">
                <input type="hidden" v-model="category.categoryId" />
       <input type="text" class="form-control" v-model="category.categoryName" />
       <button @click="addCategory" class="btn btn-primary">{{btnText}}</button>
</div>
            
        </div>
      </div>
    </div>
</template>

<style lang="css" scoped>

</style>