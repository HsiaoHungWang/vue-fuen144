<script setup>
// import FirstComponent from '@/components/FirstComponent.vue';

// import SecondComponent from './components/SecondComponent.vue';
// import ComponentLife from './components/ComponentLife.vue';
// import ButtonCount from './components/ButtonCount.vue';
// import HomeView from './views/HomeView.vue';
// import AboutView from './views/AboutView.vue';
// import ContactView from './views/ContactView.vue';

// import duck from './assets/duck.png'
</script>

<template> 
<h2>Hello Vue!!</h2>
<!-- <img :src="duck" alt="duck1" />  -->
<RouterLink :to="{name:'home'}">首頁</RouterLink> | 
<RouterLink :to="{name:'about'}">關於</RouterLink> | 
<RouterLink :to="{name:'contact'}">聯絡</RouterLink> |
<RouterLink :to="{name: 'member', params:{id:3}}">會員中心</RouterLink>
<hr />

<RouterView></RouterView>



<!--Tab-->
<!-- <FirstComponent></FirstComponent>
<second-component></second-component> 
<ComponentLife></ComponentLife>
<ButtonCount></ButtonCount>
<HomeView></HomeView>
<AboutView></AboutView>
<ContactView></ContactView> -->
</template>

<style scoped>

</style>
