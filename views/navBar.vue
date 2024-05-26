<template>
  <wd-navbar :title="activeItem.slogan" fixed placeholder safeAreaInsetTop :bordered="false">
  </wd-navbar>
</template>


<script setup name="navBar">
import { activeItem,activeBgColor,activeColor} from "@/hooks/useTabs"


</script>

<style lang="scss" scoped>
:deep(.wd-navbar__title) {
  background-color: v-bind(activeBgColor);
  color: v-bind(activeColor);
  width: 100% !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  max-width: 100%;
  font-size: 16px;
}

:deep(.wd-navbar__left) {
  padding: 0 !important;
}
</style>