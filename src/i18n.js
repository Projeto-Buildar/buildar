import i18n, { reloadResources } from "i18next"
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json"
import ptTranslation from "./locales/pt.json"

i18n
    .use( initReactI18next )
    .init({
        lng: 'pt', //Definir linguagem inicial
        fallBacklng: 'pt', // Definir um idioma de fallback
        resources: {
            en: {
                translation: enTranslation,
            },
            pt: {
                translation: ptTranslation,
            },
            interpolation: {
                escapeValue: false, //Evitar a necessidade de espacart essa sequencia em traduções
            }
        }
    })

export default i18n;