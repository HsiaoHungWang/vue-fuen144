<script setup>
import { ref } from 'vue'
const theSort = ref("spotId")
const sortItem = ref({
    "type": "asc",
    "by": "spotId"
})
const emit = defineEmits(["sortChange"])
const changeHandler = () => {
    sortItem.value.type = theSort.value.startsWith('-') ? "desc" : "asc";
    sortItem.value.by = theSort.value.replace(/^-/, '');
    emit("sortChange", sortItem.value)
}
</script>

<template>

    <select class="form-select" @change="changeHandler" v-model="theSort">
        <option value="spotId">景點編號升冪</option>
        <option value="-spotId">景點編號降冪</option>
        <option value="spotTitle">景點名稱升冪</option>
        <option value="-spotTitle">景點名稱降冪</option>
    </select>

</template>

<style lang="css" scoped></style>