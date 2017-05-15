import {addLocaleData} from "react-intl"
import en from "react-intl/locale-data/en"
import fr from "react-intl/locale-data/fr"
import es from "react-intl/locale-data/es"
import flatten from "flat"

// Get our translations files
import localeEN from "../translation/en.yml"
import localeFR from "../translation/fr.yml"
import localeES from "../translation/es.yml"

// Load "en" and "fr" utils
addLocaleData({...en, ...fr, ...es})

const locales = ["fr", "en", "es"]
const defaultLocale = "en"
const messages = {
  en: flatten(localeEN),
  fr: flatten(localeFR),
  es: flatten(localeES)
}

export function getLocale(url) {
  // Get the "en" from the url "http://domain.tld/en"
  const firstURIlevel = url.replace(/^\//, "").split("/")[0]

  // If there is not the locale in the url, we take the default locale
  return firstURIlevel && locales.indexOf(firstURIlevel) > -1
    ? firstURIlevel
    : defaultLocale
}

export function getIntl(locale) {
  // We will inject this into IntlProvider
  return {
    locale: locale,
    messages: messages[locale],
    defaultLocale: defaultLocale,
  }
}
