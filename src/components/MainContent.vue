<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './HelloWorld.vue'
import { togglePanel } from './useSidePanel';
</script>

<template>
<main>

  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  </main>
</template>

<style lang="sass" scoped>
main
  margin: 1vh 1vw
  cursor: pointer
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
