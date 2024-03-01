<script setup lang="ts" name="Demo">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const contentList = reactive([
  '✔ ⚡ Vue3 + Vite4',
  '✔ 🍕 TypeScript',
  '✔ ✨ Vant4',
  '✔ 🌀 Tailwindcss',
  '✔ 🍍 Pinia',
  '✔ 🌓 darkmode',
  '✔ Vue-router 4',
])
</script>

<template>
  <div class="demo-content px-[12px]">
    <div class="pl-[12px] border-l-[3px] border-[color:#41b883]">
      <a
        class="flex items-center"
        href="https://github.com/yulimchen/vue3-h5-template"
        target="_blank"
      >
        <svg-icon class="text-[20px] mr-[8px]" name="github" />
        <h3 class="font-bold text-[18px] my-[4px]">Vue3-h5-template</h3>
        <svg-icon class="text-[12px] ml-[5px]" name="link" />
      </a>
    </div>
    <div
      class="text-[14px] py-[2px] px-[10px] rounded-[4px] bg-[var(--color-block-background)] mt-[14px]"
    >
      <p class="my-[14px] leading-[24px]">
        🌱  Vue3 、TypeScript、Vite  {{ t('name') }}
      </p>
    </div>

    <div class="demo-main">
      <van-cell v-for="(item, idx) in contentList" :key="idx" :title="item" />
    </div>
  </div>
</template>
