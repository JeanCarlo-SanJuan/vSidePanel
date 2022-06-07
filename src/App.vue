<template>
<vPage>
    <template v-slot:sidePanel>
      <SidePanel></SidePanel>
    </template>
      <template v-slot:header>
        <button @click="togglePanel">
        ☰
      </button>
    </template>
    <template v-slot:main>
      <MainContent></MainContent>
    </template>

</vPage>
</template>
<script setup>
import vPage from './components/Page.vue';
import MainContent from './components/MainContent.vue';
import SidePanel from "./components/SidePanel.vue"
import { togglePanel } from './components/useSidePanel';
</script>
<style lang='sass'>
body,html
    margin: 0
    padding: 0
</style>

<style lang="sass" scoped>
button
  position: sticky
  top: 0
  width: min-content
  margin: 1vh 1vw
</style>