<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import NavBar from './components/Common/NavBar.vue';
import RiskFooter from './components/Common/RiskFooter.vue';
// import HelloWorld from './components/HelloWorld.vue'
// let isActive = false // remember how to dynamically bind class and style
// let classObj = { // also can be done via object
//   active: true,
//   'text-danger': false
// }
</script>

<template>
  <body>
    <header><NavBar />
    </header>
    <RouterView />
    <RiskFooter />
  </body>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
}

body {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: url("assets/Cosmere Symbol.png");
  background-repeat: repeat;
  background-color: #cccccc;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
