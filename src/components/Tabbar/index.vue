<script setup lang="ts">
import { reactive, ref } from 'vue'

const active = ref(0)
const tabbarData = reactive([
  {
    icon: 'wap-home-o',
    title: 'Home',
    to: {
      name: 'Demo',
    },
  },
  {
    icon: 'gem-o',
    title: 'Tools',
    to: {
      name: 'Tools',
    },
  },
  {
    icon: 'user-o',
    title: 'About',
    to: {
      name: 'About',
    },
  },
])
</script>

<template>
  <van-tabbar v-model="active" :placeholder="true" :route="true" fixed>
    <van-tabbar-item
      v-for="(item, index) in tabbarData"
      :key="index"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.title }}
    </van-tabbar-item>
  </van-tabbar>
</template>
