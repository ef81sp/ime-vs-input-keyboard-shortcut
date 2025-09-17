<template>
  <img :src="src" :alt="primaryLang === 'ja' ? altJa : altEn" />
</template>

<script setup lang="ts">
import { usePrimaryLang } from "../composables/usePrimaryLang";

defineProps<{
  src: string;
  altJa: string;
  altEn: string;
}>();

const { primaryLang } = usePrimaryLang();
</script>
