<script setup>
    defineProps({
        id:String
    })
</script>

<template>
    <div>
        <!-- 取得路由參數的第一種寫法 $route.params.[參數名稱] -->
      <h2>會員中心 {{ $route.params.id }} {{ id }}</h2>

      <!-- 
         取得路由參數的第二種寫法
         1. 路由設定檔案中要加上 props:true
         2. 在 script 中，要透過 defineProps 宣告路由參數
         3. 在 template 中使用參數 {{ id }}
       -->
    </div>
</template>

<style lang="css" scoped>

</style>