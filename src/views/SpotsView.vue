<script setup>
import { ref } from 'vue';
const BASE_URL = import.meta.env.VITE_API_BASEURL
const API_URL = `${BASE_URL}/spots`

    const terms = ref({
        "keyword": "公園",
        "categoryId": 0,
        "sortBy": "spotId",
        "sortType": "desc",
        "page": 1,
        "pageSize": 9
    })

    //API 回傳的結果會放進這裡
const result = ref({
    "totalPages": 0, //共有幾頁
    "spots": [] //景點資料
})


    const loadSpots = async()=>{
       const response = await fetch(API_URL,{
        method:'POST',
        body:JSON.stringify(terms.value),
        headers:{'Content-Type':'application/json'}
       })
       const datas = await response.json()
       result.value.totalPages =datas.totalPages
       result.value.spots = datas.spotsResult

       console.log(result.value)
    }

    loadSpots()

    const desc100 = description => description.length <= 100 ? description : description.substring(0, 100) + '...';

</script>

<template>
    <div>
     <h2>台北市景點</h2>
     <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" v-for="{spotId,spotTitle,spotDescription,spotImage,address } in result.spots">
    <div class="card h-100">
      <img :src="spotImage" class="card-img-top" :alt="spotTitle" :title="spotTitle">
      <div class="card-body">
        <h5 class="card-title">{{spotId}} {{ spotTitle }}</h5>
        <p class="card-text">{{desc100(spotDescription)}}</p>
      </div>
      <div class="card-footer">
      <small class="text-body-secondary">{{address}}</small>
    </div>
    </div>
   
  </div>
  
</div>
    </div>
</template>

<style lang="css" scoped>

</style>