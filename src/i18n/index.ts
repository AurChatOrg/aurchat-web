import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

const SUPPORT_LOCALES = ['en', 'zh']
type SupportLocale = (typeof SUPPORT_LOCALES)[number]

const CACHED = localStorage.getItem('locale')
const BROWSER = navigator.language.slice(0, SUPPORT_LOCALES.length)
const LOCALE: SupportLocale = (SUPPORT_LOCALES as readonly string[]).includes(CACHED!)
	? (CACHED as SupportLocale)
	: (SUPPORT_LOCALES as readonly string[]).includes(BROWSER)
		? (BROWSER as SupportLocale)
		: 'zh'

export const i18n = createI18n({
	locale: LOCALE,
	fallbackLocale: 'zh',
	globalInjection: true,
	messages: { en, zh },
})
