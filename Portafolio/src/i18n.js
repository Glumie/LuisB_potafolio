import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar traducciones
import es from './locales/es.json';
import en from './locales/en.json';

// Detectar idioma del navegador
const idiomaNavegador = navigator.language.split('-')[0];
const idiomaInicial = ['es', 'en'].includes(idiomaNavegador) ? idiomaNavegador : 'es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: idiomaInicial,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
    debug: false
  });

export default i18n;