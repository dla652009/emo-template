<!-- 搜索组件 -->
<template>
  <div class="emo-search">
    <div
      class="emo-search-item"
      v-for="(item, index) in searchMap"
      :key="index"
    >
      <span class="emo-search-item__label">{{ item.label }}：</span>
      <div class="emo-search-item__content">
        <!-- 选择器 -->
        <template v-if="item.type === 'select'"></template>
        <!-- 级联选择器 -->
        <template v-else-if="item.type === 'cascader'"></template>
        <!-- 日期选择器 -->
        <template v-else-if="item.type === 'date'"></template>
        <!-- 输入框 -->
        <template v-else>
          <el-input
            v-model="searchData[item.prop]"
            :placeholder="placeholder(item)"
            clearable
          ></el-input>
        </template>
      </div>
    </div>
    <div class="emo-search-btns"></div>
  </div>
</template>

<script setup lang="ts">
import { SearchMap, SearchData } from "./emo-search";
const props = defineProps({
  searchMap: {
    type: Array<SearchMap>,
    required: true,
    default: () => [],
  },
});
const searchData: SearchData = reactive({});
const init: Function = () => {
  props.searchMap.forEach((item: SearchMap): void => {
    searchData[item.prop] = "";
  });
};
const placeholder: Function = ({ type, label }: SearchMap): string => {
  switch (type) {
    case "select":
    case "cascader":
    case "date":
      return `请选择${label}`;
    default:
      return `请输入${label}`;
  }
};
init();
</script>

<style lang="scss" scoped>
$box-padding: 14px 30px 0px 30px;
$box-background-color: #fff;
.emo-search {
  padding: $box-padding;
  background-color: $box-background-color;
  .emo-search-item {
    .emo-search-item__label {
    }
    .emo-search-item__content {
    }
  }
  .emo-search-btns {
  }
}
</style>
