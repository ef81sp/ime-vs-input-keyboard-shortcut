<script setup lang="ts">
import VP from './VP.vue'
import { computed, toRefs } from 'vue'
import { usePrimaryLang } from '../composables/usePrimaryLang'

const { enCaptions, jaCaptions, at = '+1' } = defineProps<{
  enCaptions: string[]
  jaCaptions: string[]
  at?: string | number
}>()

const { primaryLang, secondaryLang } = usePrimaryLang()

const combinedCaptions = computed(() => {
  const maxLength = Math.max(enCaptions.length, jaCaptions.length)
  return Array.from({ length: maxLength }, (_, index) => ({
    en: enCaptions[index] || '',
    ja: jaCaptions[index] || '',
    slotName: (index + 1).toString(),
  }))
})
</script>

<template>
  <VSwitch :at>
    <template v-for="(caption, index) in combinedCaptions" :key="index" v-slot:[caption.slotName]>
      <VP>
        <template #en>
          <span v-html="caption.en"></span>
        </template>
        <template #ja>
          <span v-html="caption.ja"></span>
        </template>
      </VP>
    </template>
  </VSwitch>
</template>

<style scoped>
:deep(.slidev-vclick-target) {
  transition: opacity 0.2s ease-in-out;
}

:deep(.slidev-vclick-hidden) {
  opacity: 0;
  pointer-events: none;
}

/* 切替時に一瞬何も表示されない時間を作る */
:deep(.slidev-vclick-target:not(.slidev-vclick-hidden)) {
  animation: appear-with-gap 0.2s ease-in-out;
}

@keyframes appear-with-gap {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  50% {
    opacity: 0;
    visibility: hidden;
  }
  51% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
</style>
