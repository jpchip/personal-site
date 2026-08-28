// Plain object (not GraphQL) so it can be shared between gatsby-config.js and
// components that render inside the Gatsby Head API, which cannot run
// useStaticQuery / StaticQuery.
module.exports = {
  title: `Jared Chapiewsky`,
  description: `Portfolio of Jared Chapiewsky.`,
  author: `Jared Chapiewsky`,
  siteUrl: `https://jaredchapiewsky.me`,
}
