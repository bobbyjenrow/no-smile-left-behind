export function getLocale(url) {
  // Get the "en" from the url "http://domain.tld/en"
  const firstURIlevel = url.replace(/^\//, "").split("/")[0]

  // If there is not the locale in the url, we take the default locale
  return firstURIlevel && locales.indexOf(firstURIlevel) > -1
    ? firstURIlevel
    : defaultLocale
}
