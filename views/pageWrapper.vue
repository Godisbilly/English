<template>
  <view class="pageWrapper">
    <view>
      <slot name="default"></slot>
    </view>
    <tabBar></tabBar>
  </view>
</template>


<script name="pageWrapper" setup>
import tabBar from "./tabBar.vue";

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
