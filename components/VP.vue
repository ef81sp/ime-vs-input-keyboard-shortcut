<template>
  <div>
    <p class="en"><slot name="en" /></p>
    <p class="ja"><slot name="ja" /></p>
  </div>
</template>

<style scoped>
.en {
  margin-top: 0.5em;
  margin-bottom: 0.2em;
}
.ja {
  font-size: 0.85em;
  margin-top: 0;
  margin-left: 1.5em;
  margin-block-end: 0.5em;
}
</style>
