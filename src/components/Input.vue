<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps(['modelValue', 'label'])
defineEmits(['update:modelValue'])
</script>
<template>
  <div>
    <label class="text-gray-600">{{ label }}</label>
    <div class="flex p-2 bg-white mt-2 border border-gray-200">
      <input
        class="outline-none flex-1"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>
