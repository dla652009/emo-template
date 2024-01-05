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
    <div ref="btns" class="emo-search-btns">
      <el-button type="primary" @click="handleSearch">搜索</el-button>
      <el-button type="primary" @click="handleReset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchMap, SearchData } from "./emo-search";
const proxy = getCurrentInstance()?.proxy;
const props = defineProps({
  searchMap: {
    type: Array<SearchMap>,
    required: true,
    default: () => [],
  },
});
const searchData: SearchData = reactive({});
let labelWidth: string = ref("auto");
function init() {
  props.searchMap.forEach((item: SearchMap): void => {
    searchData[item.prop] = "";
  });
}
// 占位符
function placeholder({ type, label }: SearchMap): string {
  switch (type) {
    case "select":
    case "cascader":
    case "date":
      return `请选择${label}`;
    default:
      return `请输入${label}`;
  }
}
// 搜索
function handleSearch() {}
// 重置
function handleReset() {}
// 设置按钮组对齐方式
function setBtnsAlign() {
  const btns: object | unknown = proxy?.$refs.btns;
  console.log(typeof btns, "btns");
  setLabelWidth();
}
function setLabelWidth() {}
onMounted(() => {
  setBtnsAlign();
});
init();
</script>

<style lang="scss" scoped>
$box-padding: 14px 30px 0px 30px;
$box-background-color: #fff;
$label-color: #6e69a1;
.emo-search {
  overflow: hidden;
  padding: $box-padding;
  background-color: $box-background-color;
  .emo-search-item {
    display: inline-block;
    margin-bottom: 8px;
    .emo-search-item__label {
      display: inline-block;
      margin-right: 12px;
      white-space: nowrap;
      color: $label-color;
    }
    .emo-search-item__content {
      display: inline-block;
      margin-right: 20px;
    }
  }
  .emo-search-btns {
    display: inline-block;
    margin-bottom: 14px;
  }
}
</style>
