import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import TRANSLATIONS_EN from './en';
import TRANSLATIONS_RU from './ru';

const options = {
  order: ['localStorage'],
  caches: ['localStorage', 'cookie']
};

const resources = {
  en: {
    translation: TRANSLATIONS_EN
  },
  ru: {
    translation: TRANSLATIONS_RU
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    fallbackLng: ['en', 'ru'],
    detection: options
  });

export default i18n;
