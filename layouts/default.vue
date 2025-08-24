<template>
  <div class="slidev-layout default">
    <!-- デフォルトレイアウトの内容をベースにカスタマイズ -->
    <slot name="default" />
    <div class="captions-container">
      <slot name="captions" />
    </div>
  </div>
</template>

<style scoped>
.captions-container {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
}

.captions-container:deep(p) {
  color: white;
}
.captions-container:deep(code) {
  background-color: lightgray;
  color: maroon;
}
</style>
