<script setup>
  import { computed } from 'vue'
  // import mechanics from '../services/mechanics.js'
  function rollDie() {
    return 1
  }
  let number = ref(rollDie())
  const objeOfAttrs = { // bind multiple attributes to an element at once
    id: 'container',
    class: 'wrapper'
  }
  const display = computed(() => {
    number > 0 ? 1 : 0
  })
</script>

<template>
  <main>
    <span @click="">Hello, Roshar</span>
    <span v-bind="objeOfAttrs">Something {{ display }}</span>
  </main>
</template>