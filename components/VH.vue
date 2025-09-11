<template>
  <component :is="level">
    <span lang="en"><slot name="en" /></span>
    <small lang="ja" class="ml-8 text-[0.65em]"><slot name="ja" /></small>
  </component>
</template>

<script setup lang="ts">
defineProps({
  level: {
    type: String,
    default: "h2",
    validator: (value) =>
      typeof value === "string" &&
      ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
  },
});
</script>
