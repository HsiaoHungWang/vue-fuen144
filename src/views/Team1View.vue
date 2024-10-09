<script setup>
import { ref } from 'vue';

    const title =ref("iSpan")
    const FirstName = ref('Jack')
    const LastName = ref('Wu')
    const isLogin = ref(true)

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
    </div>
</template>

<style lang="css" scoped>

</style>