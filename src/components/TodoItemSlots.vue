<script setup>
const props = defineProps({
  idx: Number,
  isComplete: Boolean
})

const emit = defineEmits(['toggleState'])

const handleToggle = () => {
  emit('toggleState', props.idx)
}
</script>

<template>
  <div class="border border-green-500 bg-white shadow-md p-4">
    <header class="font-medium text-lg text-green-700" :class="[isComplete && 'line-through']">
      <slot name="title"></slot>
    </header>
    <section class="mt-2">
      <div :class="[isComplete && 'line-through']" class="text-md text-gray-600">
        <slot name="description"></slot>
      </div>
    </section>
    <footer class="flex mt-4 text-sm">
      <div class="flex items-center">
        <div class="mr-2 text-gray-400">Toggle</div>
        <div @click="handleToggle" class="btn p-1 border border-green-500 cursor-pointer">
          {{ isComplete ? 'Completed' : 'Not Complete' }}
        </div>
      </div>

      <div class="ml-auto text-gray-400" :class="[isComplete && 'line-through']">
        <slot name="date"></slot>
      </div>
    </footer>
  </div>
</template>
