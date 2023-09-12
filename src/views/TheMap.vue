<script setup>
  // import { computed } from 'vue'
  // import { diceSet } from '../services/mechanics.js'

  // let results = diceSet(3, 6)

  const objeOfAttrs = { // bind multiple attributes to an element at once
    id: 'container',
    class: 'wrapper'
  }
  
  // const display = computed(() => {
  //   return results
  // })
/**
Remember this for when you need lifecycle stuff

var vm = new Vue({
  data(){
    return{
      myComputed: '',
      computedData: 'Hello World'
    }
  },
  created() {
    this.myComputed = this.computedData;
  },
  watch: {
    computedData() {
      this.myComputed = this.computedData;
    }
  }
});
*/
</script>

<template>
  <main>
    <span>Hello, Roshar </span><!-- @onclick  -->
    <span v-bind="objeOfAttrs">Something</span>
  </main>
</template>
