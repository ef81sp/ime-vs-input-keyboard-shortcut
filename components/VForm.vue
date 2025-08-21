<script setup lang="ts">
import { ref } from 'vue'

const submitCount = ref(0)
const showSubmitMessage = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

const handleEnter = (e: Event) => {
  submitCount.value++
  showSubmitMessage.value = true

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    showSubmitMessage.value = false
  }, 800)
}
</script>

<template>
  <form class="flex items-center gap-2" @submit.prevent="handleEnter">
    <input class="input" type="text" />
    <div class="relative h-6 w-40">
      <Transition name="slide-up">
        <div v-if="showSubmitMessage" class="absolute inset-0 m-0">
          Submit Count:
          <span class="font-bold">{{ submitCount }}</span>
        </div>
      </Transition>
    </div>
  </form>
</template>

<style scoped>
.input {
  border: 3px solid #000;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
