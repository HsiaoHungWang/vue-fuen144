<script setup>
    
</script>

<template>
    <div>
    <h2>About Page</h2>
    <RouterLink :to="{name:'team1'}">Team1</RouterLink> | 
    <RouterLink :to="{name:'team2'}">Team2</RouterLink>
    <hr />

    <RouterView></RouterView>
    </div>
</template>

<style lang="css" scoped>

</style>