import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationEn } from 'assets/locales';

export const resources = {
  ...translationEn,
};

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18next;
