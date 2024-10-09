<script setup>
import { ref } from 'vue';

    const title =ref("iSpan")
    const FirstName = ref('Jack')
    const LastName = ref('Wu')
    const isLogin = ref(true)
    const week = ref(["日", "一", "二", "三", "四", "五", "六"])

    console.log(week.value[new Date().getDay()])
    const author = ref({    
        books: [
        'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })
    console.log(author.value.books.length > 0 ? "有":"無")




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
      <p>{{ new Date().toLocaleDateString()  }}</p>
      <p>{{ i+=1 }}，{{ i++ }}</p> <!--怪怪的結果-->
      <p>星期 {{week[new Date().getDay()]}}</p>
      <p>出版了書籍 {{ author.books.length > 0 ? "是":"否" }}</p>
    </div>
</template>

<style lang="css" scoped>

</style>