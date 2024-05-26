import {ref,watchEffect,computed} from 'vue'
const tabbar = ref(0)

const tabbarItems = ref([
  {
    title:"Words",
    bgc:"rgb(68, 117, 238)",
    color:"#fff"
  },
  {
    title:"Sentences",
    bgc:"rgb(46, 203, 146)",
    color:"#fff"
  },
  {
    title:"Articles",
    bgc:"rgb(238, 125, 51)",
    color:"#fff"
  },
  {
    title:"User",
    bgc:"rgb(251, 89, 88)",
    color:"#fff"
  }
])

watchEffect(()=>{
  changeTab(tabbarItems.value[tabbar.value].title)
})

function changeTab(activeTab) {
  console.log("changeTab",activeTab)
}

const activeBgColor = computed(()=>{
  return tabbarItems.value[tabbar.value].bgc
})

const activeColor = computed(()=>{
  return tabbarItems.value[tabbar.value].color
})

export  {
  tabbar,
  tabbarItems,
  activeBgColor,
  activeColor,
  changeTab
}