<template>
  <component :is="level">
    <span :lang="primaryLang"><slot :name="primaryLang" /></span>
    <small v-if="!primaryOnly" :lang="secondaryLang" class="ml-8 text-[0.65em]">
      <slot :name="secondaryLang" />
    </small>
  </component>
</template>

<script setup lang="ts">
import { usePrimaryLang } from "../composables/usePrimaryLang";

defineProps({
  level: {
    type: String,
    default: "h2",
    validator: (value) =>
      typeof value === "string" &&
      ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
  },
});

const { primaryLang, secondaryLang, primaryOnly } = usePrimaryLang();
</script>
