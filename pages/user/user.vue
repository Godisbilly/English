<template>
  <pageWrapper>
    <view>
      <wd-calendar-view type="week" v-model="value" :first-day-of-week="1" @change="handleChange" />
      <view>
        <wd-cell v-for="cell in cells" :key="cell.title" :title="cell.title" :value="cell.value" />
      </view>
    </view>
  </pageWrapper>
</template>

<script setup name="words">
import pageWrapper from "/views/pageWrapper"
import { ref } from "vue"

const value = ref(Date.now())
function handleChange (val) { }
const cells = ref([
  {
    title: "Words",
    label: "Label",
    value: "1",
  },
  {
    title: "Sentenses",
    label: "Label",
    value: "2",
  },
  {
    title: "Articles",
    label: "Label",
    value: "3",
  },
]);

</script>


<style lang="scss" scoped></style>