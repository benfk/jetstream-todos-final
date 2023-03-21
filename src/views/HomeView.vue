<script setup>
import { ref } from 'vue'
import TodoItemProps from '../components/TodoItemProps.vue'
import TodoItemSlots from '../components/TodoItemSlots.vue'
import AddTodo from '../components/AddTodo.vue'
import { todos } from '../utils/constants'

const todoList = ref(todos)

const onToggleState = (idx) => {
  console.log('idx---', idx)
  const updated = todoList.value
  const item = updated[idx]

  item.completed = !item.completed

  updated.splice(idx, 1, item)
  todoList.value = updated
}

const onSubmit = (details) => {
  todoList.value = [...todoList.value, details]
}
</script>

<template>
  <div class="grid grid-cols-7 gap-10">
    <aside class="col-span-2 bg-gray-100 p-8">
      <AddTodo @submit="onSubmit" />
    </aside>
    <main class="flex flex-wrap col-span-5 p-2">
      <div class="mr-4 mb-4 w-[45%]" v-for="(item, idx) in todoList" :key="item.id">
        <TodoItemProps @toggle-state="onToggleState" :todo="item" :idx="idx" />
      </div>

      <!-- slot version of todo item -->
      <div class="w-[45%]">
        <TodoItemSlots @toggle-state="onToggleState" :idx="0" :is-complete="todoList[0].completed">
          <template #title>{{ todoList[0].title }}</template>
          <template v-slot:description>{{ todoList[0].description }}</template>
          <template v-slot:date>{{ todoList[0].date }}</template>
        </TodoItemSlots>
      </div>

      <!-- <TodoItem @toggle-state="onToggleState" :todo="todoList[0]" :idx="0" /> -->
    </main>
  </div>
</template>
