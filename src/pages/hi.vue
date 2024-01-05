<template>
  <emo-search :search-map="searchMap" />
</template>

<script setup lang="ts">
const searchMap = reactive([
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "年龄",
  },
]);
</script>

<style scoped></style>
