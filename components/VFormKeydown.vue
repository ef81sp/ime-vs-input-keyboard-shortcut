<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'

const { type } = defineProps<{ type: 'good' | 'bad' }>()

const inputRef = useTemplateRef('input')
const showSubmitMessage = ref(false)
const submittedValue = ref('')
let timeoutId: ReturnType<typeof setTimeout> | null = null

const handleEnter = (e: KeyboardEvent) => {
  if (type === 'good') {
    if (e.isComposing) {
      return
    }
  }
  submit(inputRef.value!.value)
}

const submit = async (text) => {
  submittedValue.value = text
  showSubmitMessage.value = true
  setTimeout(() => {
    inputRef.value!.value = ""
  }, 0)
  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    showSubmitMessage.value = false
  }, 800)
}

const blur = (e: KeyboardEvent) => {
  if (e.target === inputRef.value) {
    inputRef.value!.blur()
  }
}
</script>

<template>
  <div class="flex items-center gap-2">
    <input class="input" type="text" ref="input" @keyup.enter.capture="handleEnter" @keydown.escape="blur" />
    <div class="relative h-6 w-60">
      <Transition name="slide-up">
        <div v-if="showSubmitMessage" class="absolute inset-0 m-0">
          Submitted Value:
          <span class="font-bold">{{ submittedValue }}</span>
        </div>
      </Transition>
    </div>
  </div>
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
