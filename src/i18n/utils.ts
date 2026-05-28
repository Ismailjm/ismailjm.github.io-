import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';

export type Locale = 'en' | 'fr' | 'ar';

const dictionaries = { en, fr, ar } as const;

export function getLangFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  if (maybeLocale === 'fr' || maybeLocale === 'ar') return maybeLocale;
  return 'en';
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof en): string {
    return (dictionaries[lang] as Record<string, string>)[key] ?? dictionaries.en[key] ?? key;
  };
}

export function localizePath(path: string, lang: Locale): string {
  if (lang === 'en') return path;
  return `/${lang}${path}`;
}
