<template>
  <wd-tabbar v-model="tabbar" fixed placeholder safeAreaInsetBottom :activeColor="activeColor" inactiveColor="#000"
    shape="default">
    <wd-tabbar-item custom-class="itemStyle" v-for="item in tabbarItems" :key="item.title"
      :title="item.title"></wd-tabbar-item>
  </wd-tabbar>
</template>

<script name="tabBar" setup>
import {  tabbar,tabbarItems,activeBgColor,activeColor} from "@/hooks/useTabs"


</script>


<style lang="scss" scoped>
:deep(.wd-tabbar) {
  height: 45px !important;
}

.wd-tabbar-item {
  background-color: v-bind(activeBgColor);
}

.itemStyle {
  :deep(span) {
    font-size: 16px !important;
    font-weight: bold !important;
    text-align: center !important;
  }
}
</style>