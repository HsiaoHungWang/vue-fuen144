import { defineStore } from "pinia";
import { ref } from "vue";
export const useTodoStore = defineStore('todo', () => {
    let todos = localStorage.getItem('todos')
    if (todos === null) {
        todos = []
    } else {
        todos = JSON.parse(todos)
    }


    //待完成工作數量
    const activeTodos = todos.filter(todo => !todo.completed)
    const qty = ref(activeTodos.length)

    const qtyChange = count => {
        qty.value = count
    }

    return { qty, qtyChange }
})