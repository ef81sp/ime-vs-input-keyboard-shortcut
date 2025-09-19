<script setup lang="ts">
import { useIsVideo } from "../composables/useIsVideo";
const { isVideo } = useIsVideo();
</script>
<template>
  <label class="text-sm absolute right-4 top-1">
    <input type="checkbox" v-model="isVideo" />
    Video
  </label>
</template>
