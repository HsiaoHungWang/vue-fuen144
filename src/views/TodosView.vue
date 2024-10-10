<script setup>
import { computed, ref } from 'vue';
const newTodo = ref('')

const editedTodo = ref({}) //紀錄目前修改的是哪一個Todo
const oldTodoTitle = ref('')


const todos = ref(
    [
        { "id": "m21uwqfprb0ncx4", "title": "todo1", "completed": false },
        { "id": "m21w6x73hw2tvrc", "title": "todo2", "completed": true },
        { "id": "m21w6x73hw2abcd", "title": "todo3", "completed": false },
    ]
)
//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

//Todo 新增
const addTodo = ()=>{
    todos.value.push({ "id": uniqueId(), "title": newTodo.value, "completed": false })
    newTodo.value = ''
}

//Todo 刪除
const removeTodo = (todo) => {
   const idx = todos.value.indexOf(todo);
   todos.value.splice(idx, 1)
}

//紀錄目前修改的是哪一個Todo
const editTodo = todo =>{
    editedTodo.value = todo
    oldTodoTitle.value = todo.title   
}
//完成修改
const doneEdit = () => {
    editedTodo.value = {}
}
//取消修改
const cancelEdit = todo => {
    //還原修改前的資料  
    todo.title = oldTodoTitle.value  
    editedTodo.value = {}
}
//移除已完成工作
const removeComplete = ()=>{
    for(let i=todos.value.length-1;i>=0;i--){
        if(todos.value[i].completed){
            todos.value.splice(i, 1)
        }
    }
}

const remaining = computed(()=>{
   const activeTodos =  todos.value.filter(todo => !todo.completed)
   return activeTodos.length
})

</script>

<template>
    <div class="row">
        <div class="col-3"> </div>
        <div class="col-6">
            <h3>Todos Page</h3>
            <input type="text" v-model.trim="newTodo" @keyup.enter="addTodo" class="form-control" autofocus autocomplete="off" placeholder="想要做甚麼?">
            <ul class="list-group mt-3">
                <li v-for="todo in todos" :key="todo.id" class="list-group-item">
                    <div v-if="editedTodo !== todo" class="d-flex justify-content-between">
                        <div>
                            <input class="form-check-input me-3" type="checkbox" v-model="todo.completed">
                            <label @dblclick="editTodo(todo)" class="form-check-label" :class="{completed:todo.completed}">{{ todo.title }}</label>
                        </div>
                        <button @click="removeTodo(todo)" class="badge bg-danger rounded-pill border-0">X</button>
                    </div>
                    <input @keyup.escape="cancelEdit(todo)" @blur="doneEdit" @keyup.enter="doneEdit(todo)" v-else type="text" class="form-control" v-model.trim="todo.title">
                </li>
              
            </ul>
            <div class="mt-3 d-flex justify-content-between">
                <strong class=" me-3">尚有 {{remaining}} 個工作未完成</strong>
                <button class="btn btn-warning me-3" @click="removeComplete">清除完成工作</button>
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