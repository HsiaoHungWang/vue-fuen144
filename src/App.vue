<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavbarComponent from './components/NavbarComponent.vue';
import ClockComponent from './components/ClockComponent.vue';
import PagingComponent from './components/PagingComponent.vue';
import { ref } from 'vue';
import UseStoreDemo from './components/UseStoreDemo.vue';
import UseStoreTest from './components/UseStoreTest.vue';

import FirstComponent from '@/components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
// import ComponentLife from './components/ComponentLife.vue';
// import ButtonCount from './components/ButtonCount.vue';
// import HomeView from './views/HomeView.vue';
// import AboutView from './views/AboutView.vue';
// import ContactView from './views/ContactView.vue';

// import duck from './assets/duck.png'

const totalPages = ref(8)
const pagingHandler = page=>{
   alert('paging'+page)
}

const items = [FirstComponent, SecondComponent]
</script>

<template> 

<div class="container">
   <NavbarComponent></NavbarComponent>
<!-- <h2>Hello Vue!! <ClockComponent></ClockComponent></h2> -->
<!-- <img :src="duck" alt="duck1" />  -->
<!-- <PagingComponent :totalPages="totalPages" thePage="1" @goPaging="pagingHandler" ></PagingComponent>
<hr />
<UseStoreDemo></UseStoreDemo>
<hr/>
<UseStoreTest></UseStoreTest>
<hr/>
<component :is="items[1]"></component> -->
<hr/>
<RouterView></RouterView>

</div>





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
