<template>
  <a-style-provider :transformers="[legacyLogicalPropertiesTransformer]">
    <router-view></router-view>
  </a-style-provider>
</template>

<script lang="ts" setup>
import { legacyLogicalPropertiesTransformer } from "ant-design-vue"; // 兼容旧版浏览器 取消使用CSS逻辑属性
</script>
