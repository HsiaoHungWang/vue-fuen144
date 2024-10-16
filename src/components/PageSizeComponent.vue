<script setup>
import { ref } from 'vue'
const rows = ref(0)  //每頁幾筆
const emit = defineEmits(["PageSizeChange"])
const changeHandler = () => {
    emit("PageSizeChange", rows.value)
}

</script>

<template>
    <div class="mt-3">
        <select class="form-select" @change="changeHandler" v-model="rows">
            <option value="0">全部</option>
            <option value="3">每頁 3 筆資料</option>
            <option value="6">每頁 6 筆資料</option>
            <option value="9" selected>每頁 9 筆資料</option>
        </select>

    </div>
</template>