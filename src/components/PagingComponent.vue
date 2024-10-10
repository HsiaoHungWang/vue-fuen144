<script setup>
    const props = defineProps({
        totalPages: Number,
        thePage: Number
    })
    const emit = defineEmits(['goPaging'])

    const clickHandler = page=>{
        //alert('click' + page)
        //觸發父組件的事件，並傳遞資料給它
        emit('goPaging', page)
    }
</script>

<template>
    <p>{{thePage}}/{{ totalPages }}</p>
    <div>
        <nav aria-label="...">
  <ul class="pagination pagination-sm">  
    <li @click="clickHandler(page)" v-for="(page,idx) in totalPages" class="page-item"><a class="page-link" href="#">{{page}}</a></li>
  
  </ul>
</nav>
    </div>
</template>

<style lang="css" scoped>

</style>