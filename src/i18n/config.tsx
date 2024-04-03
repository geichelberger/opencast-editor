import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./locales/en-US.json";
import deTranslations from "./locales/de-DE.json";
import esTranslations from "./locales/es-ES.json";
import frTranslations from "./locales/fr-FR.json";
import csTranslations from "./locales/cs-CZ.json";
import nlTranslations from "./locales/nl-NL.json";
import elTranslations from "./locales/el-GR.json";
import zhCnTranslations from "./locales/zh-CN.json";
import zhTwTranslations from "./locales/zh-TW.json";

const debug = Boolean(new URLSearchParams(window.location.search).get("debug"));

const resources: InitOptions["resources"] = {
  en: { translation: enTranslations},
  de: { translation: deTranslations},
  es: { translation: esTranslations},
  fr: { translation: frTranslations},
  cs: { translation: csTranslations},
  nl: { translation: nlTranslations},
  el: { translation: elTranslations},
  "zh-CN": { translation: zhCnTranslations},
  "zh-TW": { translation: zhTwTranslations}
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: ["en-US", "en"],
    nonExplicitSupportedLngs: true,
    debug: debug,
    resources,
  });

if (debug) {
  console.debug("language", i18next.language);
  console.debug("languages", i18next.languages);
}

export default i18next;
