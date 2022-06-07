<template>
<div class="vPage">
    <slot name="sidePanel">

    </slot>
    <div class="main-panel">
        <slot name="header">

        </slot>
        <slot name="main">

        </slot>
        <slot name="footer">

        </slot>
    </div>
</div>
</template>
<script setup>
</script>
<style lang='sass'>

div.vPage
  display: flex
  height: inherit
  flex-direction: column
  height: 100vh
  @media screen and (hover: hover) and (min-width: 1024px)
    flex-direction: row

div.main-panel
    display: flex
    flex-direction: column
    width: 100%
</style>