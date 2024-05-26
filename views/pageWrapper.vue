<template>
  <view class="pageWrapper">
    <navBar></navBar>
    <view>
      <slot name="default"></slot>
    </view>
    <tabBar></tabBar>
  </view>
</template>


<script name="pageWrapper" setup>
import tabBar from "./tabBar.vue";
import navBar from "./navBar.vue";

</script>

<style lang="scss" scoped>
page {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
