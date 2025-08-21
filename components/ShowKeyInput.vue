<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue'

const isComposing = ref(false)
const key = ref('')

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case ' ':
      key.value = 'Space'
      break
    default:
      key.value = event.key
  }
  isComposing.value = event.isComposing
})

onUnmounted(() => {
  document.removeEventListener('keydown', (event) => {
    key.value = event.key
    isComposing.value = event.isComposing
  })
})

const fontWeight = computed(() => (key.value === 'Enter' ? 'bold' : 'normal'))
</script>

<template>
  <div class="w-52 text-sm">
    <table class="table-fixed">
      <tbody>
        <tr>
          <th class="font-bold text-right!">isComposing</th>
          <td class="text-center">{{ (isComposing ? '✅️ ' : '☐ ') + isComposing }} </td>
        </tr>
        <tr>
          <th class="w-16 font-bold text-right!">Key</th>
          <td class="w-16 text-center key-cell">{{ key }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.key-cell {
  font-weight: v-bind(fontWeight);
}
</style>
