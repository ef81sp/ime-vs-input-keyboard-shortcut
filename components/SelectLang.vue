<script setup lang="ts">
import { usePrimaryLang } from "../composables/usePrimaryLang";

const { primaryLang, setJa, setEn } = usePrimaryLang();
</script>

<template>
  <div class="text-2xl m-20 flex justify-center gap-16">
    <label>
      <input
        type="radio"
        name="primary-lang"
        value="ja"
        @change="setJa()"
        v-model="primaryLang"
      />
      日本語
    </label>

    <label>
      <input
        type="radio"
        name="primary-lang"
        value="en"
        @change="setEn()"
        v-model="primaryLang"
      />
      English
    </label>
  </div>
</template>
