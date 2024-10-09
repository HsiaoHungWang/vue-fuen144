<script setup>
import { ref } from 'vue';

    const title =ref("iSpan")
    const FirstName = ref('Jack')
    const LastName = ref('Wu')
    const isLogin = ref(true)
    const duck = ref('小鴨')
    const week = ref(["日", "一", "二", "三", "四", "五", "六"])
    const isDisabled = ref(false)
    const num1 = ref(0)
    const num2 = ref(0)
    const total = ref(0)

    console.log(week.value[new Date().getDay()])
    const author = ref({    
        books: [
        'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })
    console.log(author.value.books.length > 0 ? "有":"無")


    const sum = ()=>{
        // total.value = Number(num1.value) + Number(num2.value)
        total.value = num1.value + num2.value
    }


    let i  = 10

    // const getName = ()=>{
    //     return `${FirstName.value} ${LastName.value}` 
    // }
    const getName = () => `${FirstName.value} ${LastName.value}` 
  

</script>

<template>
    <div>
      <h2>Team1 Page(Template Binding 說明)</h2>
      <p>{{ title }} App 執行中</p>
      <p>{{ `我的名子是 ${FirstName} ${LastName}` }}</p>
      <p>{{ getName() }}</p>
      <p>{{ isLogin ? "登出" : "登入" }}</p>
      <p>{{ new Date().toString()  }}</p>
      <p>{{ i+=1 }}，{{ i++ }}</p> <!--怪怪的結果-->
      <p>星期 {{week[new Date().getDay()]}}</p>
      <p>出版了書籍 {{ author.books.length > 0 ? "是":"否" }}</p>
      <hr />
      <input type="checkbox" v-model="isDisabled" /> 我已同意並閱讀服務條款及隱私權保護政策
      <button :disabled="!isDisabled">送出</button>
      <img src="@/assets/duck.png" v-bind:alt="duck" :title />
      <hr />
      <input type="text" v-model.lazy.trim="title" /><span>{{ title.length }}</span>
      <input type="text" v-model.number="num1" /> + 
      <input type="text" v-model.number="num2" /> 
      <button @click="sum">=</button>
      {{ total }}
    </div>
</template>

<style lang="css" scoped>

</style>