<script setup>
import { ref } from 'vue'
import Input from './Input.vue'
import Button from './Button.vue'

const emit = defineEmits(['submit'])

const title = ref('')
const desc = ref('')

const handleSubmit = () => {
  emit('submit', {
    title: title.value,
    description: desc.value,
    date: new Date().toISOString(),
    completed: false
  })
}
</script>

<template>
  <form @submit.prevent>
    <div class="mb-4">
      <Input v-model="title" label="Title" />
    </div>

    <div class="mb-8">
      <Input v-model="desc" label="Description" />
    </div>

    <Button @click="handleSubmit">Submit</Button>
  </form>
</template>
