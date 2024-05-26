<template>
  <view class="word">
    <view class="word-content">abandon</view>
    <view>
      <view>共出现过 65 次</view>
      <view class="charts">
        <qiun-data-charts type="bar" :opts="opts" :chartData="chartData" @tap="tap" />
      </view>
    </view>
  </view>
</template>

<script setup>

import { ref } from "vue"

const chartData = ref({})
const opts = ref({
  color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
  padding: [15, 30, 0, 5],
  enableScroll: false,
  legend: {},
  xAxis: {
    boundaryGap: "justify",
    disableGrid: false,
    min: 0,
    axisLine: false,
    max: 70
  },
  yAxis: {},
  extra: {
    bar: {
      type: "stack",
      width: 30,
      meterBorde: 1,
      meterFillColor: "#FFFFFF",
      activeBgColor: "#000000",
      activeBgOpacity: 0.08,
      categoryGap: 2
    }
  }
})

function getServerData () {
  //模拟从服务器获取数据时的延时
  setTimeout(() => {
    //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
    let res = {
      // categories 从 2003 年到 2024 年
      categories: ["2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      series: [
        {
          name: "目标值",
          data: [35, 36, 31, 33, 13, 34, 35, 36, 31, 33, 13, 34, 35, 36, 31, 33, 13, 34, 35, 36, 31, 33, 13, 34]
        }
      ]
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
}

getServerData()


function tap (e) {
  console.log('tap', e)
}
</script>

<style lang="scss" scoped>
.word-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 20px;
  background-color: rgb(68, 117, 238);
  color: #fff;
}

.charts {
  height: 1000px;
}
</style>