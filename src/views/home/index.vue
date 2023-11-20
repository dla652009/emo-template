<template>
  <div>主页</div>
</template>

<script setup lang="ts">
import { TestApi } from "@/api";
TestApi().then((res) => {
    console.log(res.data, "res");
})
</script>

<style lang="scss" scoped></style>
