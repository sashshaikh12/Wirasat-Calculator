import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-react-native-language-detector';

import en from '../locales/en.json'; 
import hi from '../locales/hi.json'; 
import urLatn from '../locales/ur-Latn.json';
import ur from '../locales/ur.json';

i18n
  .use(LanguageDetector) // optional: auto-detect device language
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3', // needed for some React Native setups
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      hi: { translation: hi },
     'ur-Latn': { translation: urLatn },
     ur: { translation: ur },
    },
    interpolation: {
      escapeValue: false, // react already protects from XSS
    },
  });

export default i18n;
