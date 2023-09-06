<script setup>
  // import mechanics from '../services/mechanics.js'
  function rollDie() {
    return 1
  }
  let number = ref(rollDie())
  const objeOfAttrs = { // bind multiple attributes to an element at once
    id: 'container',
    class: 'wrapper'
  }
</script>

<template>
  <main>
    <span @click="">Hello, Roshar</span>
    <span v-bind="objeOfAttrs">Something {{ number }}</span>
  </main>
</template>