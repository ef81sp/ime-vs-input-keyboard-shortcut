<template>
  <div>
    <p class="primary" :lang="primaryLang">
      <slot v-if="primaryLang === 'en'" name="en" />
      <slot v-else-if="primaryLang === 'ja'" name="ja" />
    </p>
    <p class="secondary" :lang="secondaryLang">
      <slot v-if="secondaryLang === 'en'" name="en" />
      <slot v-else-if="secondaryLang === 'ja'" name="ja" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { usePrimaryLang } from '../composables/usePrimaryLang';

const { primaryLang, secondaryLang } = usePrimaryLang();
</script>

<style scoped>
.primary {
  margin-top: 0.5em;
  margin-bottom: 0.2em;
}
.secondary {
  font-size: 0.85em;
  margin-top: 0;
  margin-left: 1.5em;
  margin-block-end: 0.5em;
}
</style>
