<script setup>
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
</script>

<template>
  <LayoutFixed />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

</style>