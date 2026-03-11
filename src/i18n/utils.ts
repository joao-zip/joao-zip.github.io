import ptTranslations from './pt.json';
import enTranslations from './en.json';

export const languages = {
  pt: 'Português',
  en: 'English',
} as const;

export const defaultLang = 'pt' as const;

export const locales = Object.keys(languages) as Lang[];

export type Lang = keyof typeof languages;

/**
 * Get the Lang from the [...lang] rest parameter.
 * undefined / '' / 'pt' -> 'pt', 'en' -> 'en'
 */
export function getLangFromParam(param: string | undefined): Lang {
  if (param && param in languages) return param as Lang;
  return defaultLang;
}

/**
 * Build the [...lang] param value for getStaticPaths.
 * Default language -> undefined (no prefix), others -> lang code.
 */
export function langParams(): { params: { lang: string | undefined } ; props: { lang: Lang } }[] {
  return locales.map(l => ({
    params: { lang: l === defaultLang ? undefined : l },
    props: { lang: l },
  }));
}

const translations = {
  pt: ptTranslations,
  en: enTranslations,
} as const;

/**
 * Get the language from a URL path.
 * /en/about -> 'en'
 * /about -> 'pt' (default)
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) {
    return lang as Lang;
  }
  return defaultLang;
}

/**
 * Get a nested value from an object using a dot-separated key.
 */
function getNestedValue(obj: Record<string, any>, key: string): string {
  return key.split('.').reduce((acc, part) => acc?.[part], obj) as string;
}

/**
 * Create a translation function for a given language.
 */
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const value = getNestedValue(translations[lang], key);
    if (value !== undefined) return value;
    // Fallback to default language
    const fallback = getNestedValue(translations[defaultLang], key);
    if (fallback !== undefined) return fallback;
    return key;
  };
}

/**
 * Get a localized path. Adds /en/ prefix for English, no prefix for Portuguese.
 */
export function getLocalizedPath(path: string, lang: Lang): string {
  const cleanPath = path.replace(/^\/(en|pt)(\/|$)/, '/');

  if (lang === defaultLang) {
    return cleanPath || '/';
  }

  return `/${lang}${cleanPath}`;
}

/**
 * Get the CV download path for a given language.
 * Portuguese -> CV_portugues.pdf, everything else -> CV_english.pdf
 */
export function getCvPath(lang: Lang): string {
  return lang === 'pt' ? '/cv/CV_portugues.pdf' : '/cv/CV_english.pdf';
}

/**
 * Get the alternate language path (for the language switcher).
 */
export function getAlternateLangPath(currentUrl: URL, targetLang: Lang): string {
  const currentPath = currentUrl.pathname;
  const cleanPath = currentPath.replace(/^\/(en|pt)(\/|$)/, '/');

  if (targetLang === defaultLang) {
    return cleanPath || '/';
  }

  return `/${targetLang}${cleanPath}`;
}
