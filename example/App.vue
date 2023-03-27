<template>
  <div class="container">
    <div v-for="icon in iconList" :key="icon.name" class="item">
      <component :is="icon"></component>
      <div class="label">{{ icon.name }}</div>
    </div>
  </div>
</template>

<script setup>
import * as icons from "../src/index";
const { version, ...iconList } = icons;
console.log(iconList);
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  font-size: 28px;
}

.item {
  padding: 28px;
  text-align: center;
}

.label {
  font-size: 16px;
}
</style>
