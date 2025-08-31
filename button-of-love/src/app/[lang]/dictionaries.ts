import 'server-only'
 
const dictionaries = {
  en: () => import('./dictionaries/en.yaml').then((module) => module.default),
  fr: () => import('./dictionaries/fr.yaml').then((module) => module.default)
}
 
export const getDictionary = async (locale: 'en' | 'fr') =>
  dictionaries[locale]()