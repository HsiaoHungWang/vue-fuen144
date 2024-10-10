<script setup>
import { ref } from 'vue';

const todos = ref(
    [
        { "id": "m21uwqfprb0ncx4", "title": "todo1", "completed": false },
        { "id": "m21w6x73hw2tvrc", "title": "todo2", "completed": true },
        { "id": "m21w6x73hw2abcd", "title": "todo3", "completed": false },
    ]
)
//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

</script>

<template>
    <div class="row">
        <div class="col-3"> </div>
        <div class="col-6">
            <h3>Todos Page</h3>
            <input type="text" class="form-control" autofocus autocomplete="off" placeholder="想要做甚麼?">
            <ul class="list-group mt-3">
                <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <div>
                            <input class="form-check-input me-3" type="checkbox">
                            <label class="form-check-label">todo1</label>
                        </div>
                        <button class="badge bg-danger rounded-pill border-0">X</button>
                    </div>
                    <input type="text" class="form-control">
                </li>
                <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <div>
                            <input class="form-check-input me-3" type="checkbox">
                            <label class="form-check-label">todo2</label>
                        </div>
                        <button class="badge bg-danger rounded-pill border-0">X</button>
                    </div>
                    <input type="text" class="form-control">
                </li>
                <li class="list-group-item">
                    <div class="d-flex justify-content-between">
                        <div>
                            <input class="form-check-input me-3" type="checkbox">
                            <label class="form-check-label">todo3</label>
                        </div>
                        <button class="badge bg-danger rounded-pill border-0">X</button>
                    </div>
                    <input type="text" class="form-control">
                </li>
            </ul>
            <div class="mt-3 d-flex justify-content-between">
                <strong class=" me-3">尚有 3 個工作未完成</strong>
                <button class="btn btn-warning me-3">清除完成工作</button>
            </div>
        </div>
        <div class="col-3"></div>

    </div>
</template>

<style lang="css" scoped>
.completed {
    color: #949494;
    text-decoration: line-through;
}
</style>