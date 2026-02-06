"use client"

import { useEffect } from "react"
import { useLanguage } from "@/context/LanguageContext"

export default function LanguageTracker() {
  const { language } = useLanguage()

  useEffect(() => {
    // This updates the <html lang="..."> attribute in the real browser DOM
    document.documentElement.lang = language
  }, [language])

  return null 
}