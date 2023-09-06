<script setup>
  import { ref, computed } from 'vue'
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
    return number.value > 0 ? 1 : 0
  })
</script>

<template>
  <main>
    <span>Hello, Roshar</span><!-- @onclick  -->
    <span v-bind="objeOfAttrs">Something {{ display }}</span>
  </main>
</template>