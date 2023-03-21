<script setup>
import { formatDate } from '../utils/methods'

const props = defineProps({
  todo: {
    type: Object,
    default: () => ({
      title: '',
      description: '',
      date: '',
      deadline: '',
      completed: false
    })
  },
  idx: Number
})

const emit = defineEmits(['toggleState'])

const handleToggle = () => {
  emit('toggleState', props.idx)
}
</script>

<template>
  <div class="border border-green-500 bg-white shadow-md p-4">
    <header class="font-medium text-lg text-green-700" :class="[todo.completed && 'line-through']">
      {{ todo.title }}
    </header>
    <section class="mt-2">
      <div :class="[todo.completed && 'line-through']" class="text-md text-gray-600">
        {{ todo.description }}
      </div>
    </section>
    <footer class="flex mt-4 text-sm">
      <div class="flex items-center">
        <div class="mr-2 text-gray-400">Toggle</div>
        <div @click="handleToggle" class="btn p-1 border border-green-500 cursor-pointer">
          {{ todo.completed ? 'Completed' : 'Not Complete' }}
        </div>
      </div>

      <div class="ml-auto text-gray-400" :class="[todo.completed && 'line-through']">
        {{ formatDate(todo.date) }}
      </div>
    </footer>
  </div>
</template>
