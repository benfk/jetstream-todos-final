<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click')" class="bg-green-600 w-full text-white p-3 hover:bg-green-500">
    <slot></slot>
  </button>
</template>
