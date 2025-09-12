import { createSharedComposable } from "@vueuse/core";
import { ref } from "vue";

export const usePrimaryLang = createSharedComposable(() => {
  const primaryLang = ref<"en" | "ja">("en");
  const secondaryLang = ref<"en" | "ja">("ja");
  const setJa = () => {
    primaryLang.value = "ja";
    secondaryLang.value = "en";
  };
  const setEn = () => {
    primaryLang.value = "en";
    secondaryLang.value = "ja";
  };
  return { primaryLang, secondaryLang, setJa, setEn };
});
