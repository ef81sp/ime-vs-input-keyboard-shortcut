import { createSharedComposable } from "@vueuse/core";
import { ref } from "vue";

export const usePrimaryLang = createSharedComposable(() => {
  const primaryLang = ref<"en" | "ja">("en");
  const secondaryLang = ref<"en" | "ja">("ja");
  const primaryOnly = ref(false);

  const updateHtmlLang = (lang: "en" | "ja") => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  };

  const setJa = () => {
    primaryLang.value = "ja";
    secondaryLang.value = "en";
    updateHtmlLang("ja");
  };
  const setEn = () => {
    primaryLang.value = "en";
    secondaryLang.value = "ja";
    updateHtmlLang("en");
  };
  const togglePrimaryOnly = () => {
    primaryOnly.value = !primaryOnly.value;
  };

  // 初期化時にもHTML lang属性を設定
  updateHtmlLang(primaryLang.value);

  return {
    primaryLang,
    secondaryLang,
    primaryOnly,
    setJa,
    setEn,
    togglePrimaryOnly,
  };
});
