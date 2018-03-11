// Return a locale based path.
exports.pathFromSlug = (locale, slug) => {
  if (slug === '<front>') {
    return '/' + locale
  }
  return '/' + locale + '/' + slug
}
