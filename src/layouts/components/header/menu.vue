<template>
  <el-menu
    mode="horizontal"
    :default-active="activeIndex"
    @select="handleSelect"
    w-full
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>分类</template>
      <el-menu-item index="2-1">学习笔记</el-menu-item>
      <el-menu-item index="2-2">个人项目</el-menu-item>
      <el-menu-item index="2-3">技术杂烩</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
