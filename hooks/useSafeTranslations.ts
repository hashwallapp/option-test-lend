// // /hooks/useSafeTranslations.ts
// "use client"

// import { useLanguage } from '@/context/LanguageContext'
// import { translations } from '@/constants/translations'

// export const useSafeTranslations = () => {
//   const { language, isLoading } = useLanguage()

//   // Get translation with fallback
//   const getTranslation = <T = any>(path: string, defaultValue: T = "" as T): T => {
//     if (isLoading) {
//       return defaultValue
//     }

//     try {
//       const keys = path.split('.')
//       let value: any = translations[language] || translations.en || {}
      
//       for (const key of keys) {
//         if (value && typeof value === 'object' && key in value) {
//           value = value[key]
//         } else {
//           console.warn(`Translation not found: ${path} for language ${language}`)
//           return defaultValue
//         }
//       }
      
//       if (value === undefined || value === null) {
//         return defaultValue
//       }
      
//       return value
//     } catch (error) {
//       console.error(`Error accessing translation path ${path}:`, error)
//       return defaultValue
//     }
//   }

//   // Get the full translation object with fallbacks
//   const getTranslations = () => {
//     if (isLoading) {
//       return translations.en || {}
//     }
//     return translations[language] || translations.en || {}
//   }

//   return {
//     getTranslation,
//     getTranslations,
//     isLoading,
//     currentLanguage: language
//   }
// }

// // Helper function for direct translation access
// export const t = (path: string, defaultValue: string = "") => {
//   // This is a simplified version - in practice, you'd need to access the context
//   // For now, we'll export this but it's better to use the hook
//   return defaultValue
// }