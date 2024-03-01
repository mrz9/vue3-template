<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  name: string
  className?: string
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  className: '',
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.className)
    return `svg-icon ${props.className}`
  else return 'svg-icon'
})
</script>

<template>
  <svg :class="svgClass" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
