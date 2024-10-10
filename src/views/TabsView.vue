<script setup>
    import Tab1Component from '@/components/Tab1Component.vue';
    import Tab2Component from '@/components/Tab2Component.vue';
    import Tab3Component from '@/components/Tab3Component.vue';
import { ref } from 'vue';

    const tabs = [
        {"name":"Tab1", component:Tab1Component},
        {"name":"Tab2", component:Tab2Component},
        {"name":"Tab3", component:Tab3Component}
    ]
    const currentTab = ref(tabs[0].component)
    const activeIndex = ref(0)

    const setActive = index => {
        currentTab.value = tabs[index].component
        activeIndex.value = index
    }
</script>

<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="(tab,index) in tabs" :key="tab.name" @click="setActive(index)">
                <a class="nav-link" :class="{active: activeIndex === index}" aria-current="page" href="#">{{tab.name}}</a>
            </li>        
        </ul>
        <KeepAlive>
        <component :is="currentTab"></component>
    </KeepAlive>
    </div>
</template>

<style lang="css" scoped>

</style>