import {ref,computed} from 'vue'
const tabbar = ref(3)

const tabbarItems = ref([
  {
    title:"Words",
    bgc:"rgb(68, 117, 238)",
    color: "#fff",
    slogan: "A thousand miles begins with a single step.",
    path: "/pages/words/words",
  },
  {
    title:"Sentences",
    bgc:"rgb(46, 203, 146)",
    color: "#fff",
    slogan: 'seeing the forest for the trees.',
    path: "/pages/sentences/sentences"
  },
  {
    title:"Articles",
    bgc:"rgb(238, 125, 51)",
    color: "#fff",
    slogan: "I come, I see, I conquer.",
    path: "/pages/articles/articles"
  },
  {
    title:"User",
    bgc:"rgb(251, 89, 88)",
    color: "#fff",
    slogan: "Success comes from diligence.",
    path: "/pages/user/user"
  }
])

const activeBgColor = computed(()=>{
  return tabbarItems.value[tabbar.value].bgc
})

const activeColor = computed(()=>{
  return tabbarItems.value[tabbar.value].color
})

const activeItem = computed(() => {
  return tabbarItems.value[tabbar.value]
})


function changeTab() {
  uni.reLaunch({
    url: activeItem.value.path
  })
}


export  {
  tabbar,
  tabbarItems,
  activeBgColor,
  activeColor,
  changeTab,
  activeItem
}