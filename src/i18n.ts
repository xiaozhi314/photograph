import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {},
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      returnNull: false,
      defaultNS: 'translation',
    })
    .catch((error) => {
      if (import.meta.env?.MODE !== 'production') {
        console.error('[i18n] failed to initialise', error);
      }
    });
}

export default i18n;
