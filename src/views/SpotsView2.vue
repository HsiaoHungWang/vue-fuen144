<script setup>
import CategoriesComponent from "@/components/CategoriesComponent.vue";
import PageSizeComponent from "@/components/PageSizeComponent.vue";
import PagingComponent from "@/components/PagingComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import SortingComponent from "@/components/SortingComponent.vue";
import { computed, ref, watchEffect } from "vue"

//從 .env 檔中讀出 API 的 URL：https://localhost:7259/api
//加上 spots 就是我們要呼叫的 RESTful API 網址
const API_URL = `${import.meta.env.VITE_API_APIURL}/Spots`

// 搜尋景點的相關條件
const terms = ref({
    "keyword": "",
    "categoryId": 0,
    "sortBy": "spotId",
    "sortType": "asc",
    "page": 1,
    "pageSize": 9
})
//API 回傳的結果會放進這裡
const result = ref({
    "totalPages": 0, //共有幾頁
    "spots": [] //景點資料
})

watchEffect(async () => {
    console.log('watchEffect')

    //用 fetch() 呼叫 API
    const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(terms.value),
        headers: { 'Content-Type': 'application/json' }
    })
    const datas = await response.json();

    //將API回傳的結果放進result物件中
    //最多顯示8頁
    result.value.totalPages = datas.totalPages > 8 ? 8 : datas.totalPages;
    result.value.spots = datas.spotsResult
})

const desc100 = computed((description) => description.length <= 100 ? description : description.substring(0, 100) + '...')

//分頁
const pagingHandler = page => {
    terms.value.page = page
}
//關鍵字搜尋
const searchHandler = keyword => {
    terms.value.keyword = keyword
    terms.value.page = 1
}
//一頁幾筆資料
const pageSizeHandler = value => {
    terms.value.pageSize = +value
    terms.value.page = 1
}

//排序
const sortingHandler = value => {
    terms.value.sortType = value.type
    terms.value.sortBy = value.by
}

//根據分類編號讀取景點
const CategoryHandler = id => {
    terms.value.categoryId = id
    terms.value.page = 1
}
</script>

<template>
    <div>
        <div class="row">
            <div class="col-12 text-center">
                <h2>景點資料</h2>
            </div>

            <div class="col-2">
                <PageSizeComponent @PageSizeChange="pageSizeHandler"></PageSizeComponent>
            </div>
            <div class="col-5">
                <PagingComponent :totalPages="result.totalPages" :thePage="terms.page" @childClick="pagingHandler">
                </PagingComponent>

            </div>
            <div class="col-2">
                <SortingComponent @sortChange="sortingHandler"> </SortingComponent>
            </div>

            <div class="col-3">
                <SearchComponent @searchInput="searchHandler"></SearchComponent>
            </div>
            <div class="col-12">
                <CategoriesComponent @categoryClick="CategoryHandler"></CategoriesComponent>
            </div>
        </div>


        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div class="col" v-for="{ spotId, spotImage, spotTitle, spotDescription, address } in result.spots"
                :key="spotId">
                <div class="card h-100">
                    <img :src="spotImage" class="card-img-top" :alt="spotTitle">
                    <div class="card-body">
                        <h5 class="card-title">{{ spotId }} {{ spotTitle }}</h5>
                        <p class="card-text">{{ desc100(spotDescription) }}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-body-secondary">{{ address }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped></style>