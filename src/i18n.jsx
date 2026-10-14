import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// The site speaks English (default) and Persian. The choice is saved in localStorage.
// Any text in src/data can be written as { en: '...', fa: '...' }; useText() picks the active one.
// Persian switches the page to right-to-left (<html lang="fa" dir="rtl">).

const KEY = 'lang'
const LANGS = ['en', 'fa']

function savedLang() {
  try {
    const v = localStorage.getItem(KEY)
    return LANGS.includes(v) ? v : 'en'
  } catch {
    return 'en' // storage blocked: stay in English
  }
}

function applyLang(lang) {
  const html = document.documentElement
  html.lang = lang
  html.dir = lang === 'fa' ? 'rtl' : 'ltr'
}

// set before the first render, so a Persian visitor never sees a flash of the left-to-right page
const initial = savedLang()
applyLang(initial)

const LangContext = createContext({ lang: 'en', setLang: () => {} })

// `title` is the page's { en, fa } browser-tab title
export function LangProvider({ title, children }) {
  const [lang, setLang] = useState(initial)

  useEffect(() => {
    applyLang(lang)
    if (title) document.title = title[lang]
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      // storage blocked: the choice lasts until the page closes
    }
  }, [lang, title])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

const isPair = (v) => v !== null && typeof v === 'object' && !Array.isArray(v) && 'en' in v && 'fa' in v

// Walks through the data and replaces every { en, fa } with the text for `lang`.
export function localize(value, lang) {
  if (isPair(value)) return value[lang]
  if (Array.isArray(value)) return value.map((v) => localize(v, lang))
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, localize(v, lang)]))
  }
  return value
}

export function useText(data) {
  const { lang } = useLang()
  return useMemo(() => localize(data, lang), [data, lang])
}
