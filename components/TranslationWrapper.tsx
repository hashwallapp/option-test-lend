// // /components/TranslationWrapper.tsx
// "use client"

// import React, { Suspense } from 'react'
// import { useLanguage } from '@/context/LanguageContext'

// interface TranslationWrapperProps {
//   children: React.ReactNode
//   fallback?: React.ReactNode
// }

// export default function TranslationWrapper({ 
//   children, 
//   fallback = <div className="animate-pulse">Loading translations...</div> 
// }: TranslationWrapperProps) {
//   const { isLoading } = useLanguage()
  
//   if (isLoading) {
//     return <>{fallback}</>
//   }
  
//   return <>{children}</>
// }

// // HOC version
// export function withTranslations<P extends object>(
//   Component: React.ComponentType<P>
// ) {
//   return function WithTranslationsWrapper(props: P) {
//     return (
//       <TranslationWrapper>
//         <Component {...props} />
//       </TranslationWrapper>
//     )
//   }
// }