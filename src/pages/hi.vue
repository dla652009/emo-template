<template>
  <emo-search :search-map="searchMap" />
</template>

<script setup lang="ts">
const searchMap = reactive([
  {
    prop: "name",
    label: "测试1",
  },
  {
    prop: "age",
    label: "测试测试2",
  },
  {
    prop: "aaa",
    label: "测试3",
  },
  {
    prop: "aaa",
    label: "测试3",
  },
  {
    prop: "aaa",
    label: "测试3",
  },
]);
</script>

<style scoped></style>
