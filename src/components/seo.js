import React from "react"
import PropTypes from "prop-types"
import siteMetadata from "../siteMetadata"

// Renders <head> (and <body>) tags via the Gatsby Head API — see each
// page/template's `export const Head`. Head can't run useStaticQuery, so
// site metadata is imported directly from src/siteMetadata.js instead of
// queried via GraphQL, the way the old react-helmet-based SEO component did.
function Seo({ title, description, lang, meta, keywords, bodyClass }) {
  const metaDescription = description || siteMetadata.description
  const fullTitle = `${title} | ${siteMetadata.title}`
  // Served from static/logo.png (copied verbatim by Gatsby) rather than
  // imported from src/images/logo.png, since small images imported through
  // webpack get inlined as base64 data URIs — which og:image crawlers can't
  // fetch as a URL.
  const image = `${siteMetadata.siteUrl}/logo.png`

  const metaTags = [
    { name: `description`, content: metaDescription },
    { property: `og:title`, content: fullTitle },
    { property: `og:description`, content: metaDescription },
    { property: `og:type`, content: `website` },
    { property: `og:image`, content: image },
    { name: `twitter:card`, content: `summary` },
    { name: `twitter:creator`, content: siteMetadata.author },
    { name: `twitter:title`, content: fullTitle },
    { name: `twitter:description`, content: metaDescription },
    { name: `twitter:image`, content: image },
  ]
    .concat(
      keywords.length > 0 ? [{ name: `keywords`, content: keywords.join(`, `) }] : []
    )
    .concat(meta)

  return (
    <>
      <html lang={lang} />
      {bodyClass && <body className={bodyClass} />}
      <title>{fullTitle}</title>
      {metaTags.map(tag => (
        <meta key={tag.name || tag.property} {...tag} />
      ))}
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  bodyClass: PropTypes.string,
}

export default Seo
