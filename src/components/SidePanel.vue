<template>
<aside ref="sidePanel"
    class="vSidePanel"
    :data-show="isDisplayed"
>
Hello, Side Panel!
</aside>
</template>
<script setup>
import { ref } from "vue"
import {isDisplayed, togglePanel, hidePanel, showPanel} from "./useSidePanel";

const sidePanel = ref(null);
</script>
<style lang='sass' scoped>
aside.vSidePanel
    overflow-y: auto
    flex-direction: column
    display: none
    resize: horizontal
    background-color: wheat
    width: 25vw
    &[data-show="true"]
        display: block
        max-width: 25vw

aside
    padding: 1vh 1vw
</style>