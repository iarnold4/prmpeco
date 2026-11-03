// Current-page test for navigation links. Pages are built as folders (Astro's default), so every URL ends with a
// slash (/about/); both sides are normalised to that.

export function withSlash(path) {
  return path.endsWith('/') ? path : path + '/';
}

/** True when `href` points at the page being built (`path` = Astro.url.pathname). */
export function isCurrent(href, path) {
  if (!href || href === '#' || /^https?:\/\//.test(href)) return false;
  return withSlash(href) === withSlash(path);
}
