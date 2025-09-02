<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const inputRef = useTemplateRef('input')
const showSubmitMessage = ref(false)
const submittedValue = ref('')
let timeoutId: ReturnType<typeof setTimeout> | null = null

const submit = async (e: Event) => {
  submittedValue.value = inputRef.value!.value
  showSubmitMessage.value = true
  setTimeout(() => {
    inputRef.value!.value = ''
  }, 0)
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    showSubmitMessage.value = false
  }, 1600)
}
</script>

<template>
  <form class="flex items-center gap-2" @submit.prevent="submit">
    <input class="input" type="text" ref="input"/>
    <div class="relative h-6 w-60">
      <Transition name="slide-up">
        <div v-if="showSubmitMessage" class="absolute inset-0 m-0">
          Submitted Value:
          <span class="font-bold">{{ submittedValue }}</span>
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
