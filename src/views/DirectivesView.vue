<script setup>
import { ref } from 'vue';
    
const message = ref('<p>Hello World!!</p>')
const isLoading = ref(true)
const isLoggedIn = ref(true)
const username = ref('Tom')
const regions = ref([
    {"name":"新興區","code":800},
    {"name":"前金區","code":801},
    {"name":"苓雅區","code":802},
    {"name":"鹽埕區","code":803},
    {"name":"鼓山區","code":804}
])
const selectedOption = ref('802')

const user = ref({"name":"Jack","age":29,"email":"Jack@gmail.com"})


const bgColor = ref("pink")
const radius = ref("25px")
const styleObject = ref({
    color:"white",
    fontSize:"48px"
})
const items = ref([]);

setTimeout(()=>{
    isLoading.value = false    
},3000)

const keyword = ref('')
const keyupHandler = (event)=>{
    console.log(event.which)
   console.log(keyword.value)
}
const clearHandler = ()=>{
  keyword.value=""
}


</script>

<template>
    <div>
    <h2>Directives 練習</h2>
    <p>{{ message }}</p>
    <p v-text="message"></p>
    <div v-html="message"></div>
    <img src="/loading.gif" alt="loading" v-show="isLoading" />

    <div v-if="isLoggedIn">
        <p>歡迎 {{ username }}</p>
        <button @click="isLoggedIn=!isLoggedIn">登出</button>
    </div>
    <div v-else>
        <p>請先 <button  @click="isLoggedIn=!isLoggedIn">登入</button></p>
    </div>
   
    <!-- v-for 讀取陣列 -->
    <select v-model="selectedOption">
        <option v-for="(region, index) in regions" :key="region.code" :value="region.code">{{index}} {{region.name}}</option>      
    </select>
    <span>{{ selectedOption }}</span>
<!-- v-for 讀取物件 -->
    <ul>
        <li v-for="(value, key) in user">{{key}}：{{ value }}</li>      
    </ul>
<!-- v-for 產生數字範圍 -->
    <nav aria-label="...">
    <ul class="pagination pagination-lg">   
        <li class="page-item" v-for="i in 5"><a class="page-link" href="#">{{i}}</a></li>  
    </ul>
    </nav>

     <div style="width:200px;height:100px;border:1px solid green;"
     v-bind:style="{'backgroundColor':bgColor, 'border-radius': radius}" :style="styleObject">abcdefg</div>

     <div :class="{active:true, 'text-danger':false}">class 樣式</div>

      <input type="checkbox" value="a" v-model="items">Item1
      <input type="checkbox" value="b" v-model="items">Item2
      <input type="checkbox" value="c" v-model="items">Item3
      <input type="checkbox" value="d" v-model="items">Item4
      <div>選取 {{items}}</div>

      <input type="text" v-model="keyword" @keyup.delete="clearHandler" @keyup.enter="keyupHandler" ><span>{{ keyword }}</span>
    </div>
</template>

<style lang="css" scoped>
.active{
    border:1px solid green;
}
.text-danger{
    background-color: red;
    color:white
}
</style>