import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "../locales/en.json";
import ptTranslation from "../locales/pt.json";
import esTranslation from "../locales/es.json";

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        detection: {
            order: ['navigator', 'cookie'], // Define a prioridade de detecção
        },
        // lng: 'pt', //Definir linguagem inicial
        fallbackLng: 'pt', // Definir um idioma de fallback
        resources: {
            en: {
                translation: enTranslation,
            },
            pt: {
                translation: ptTranslation,
            },
            es: {
                translation: esTranslation,
            },

        },
        interpolation: {
            escapeValue: false, //Evitar a necessidade de espacart essa sequencia em traduções
        }
    })

export default i18n;