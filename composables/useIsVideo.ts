import { ref } from "vue";
import { createSharedComposable } from "@vueuse/core";
export const useIsVideo = createSharedComposable(() => {
  const isVideo = ref(true);
  const toggle = () => {
    isVideo.value = !isVideo.value;
  };
  return { isVideo, toggle };
});
