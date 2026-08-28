const siteMetadata = require(`./src/siteMetadata`)

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          quietDeps: true,
          silenceDeprecations: [`import`, `global-builtin`, `color-functions`],
        },
        // Bootstrap's compiled output leads with a `/*! Bootstrap v5.3.8 ... */`
        // license comment right before its `:root, [data-bs-theme=light] {`
        // rule. When Gatsby's production build later concatenates this
        // stylesheet with the separately-imported Font Awesome CSS and
        // minifies the result, that comment ends up spliced into the
        // selector list itself (`:root,[data-bs-theme=light],/*! ... */{`).
        // The trailing comma makes the whole selector invalid, so browsers
        // drop the rule outright - silently wiping every Bootstrap `--bs-*`
        // custom property and, with it, every `bg-*`/`text-*`/etc. utility
        // that reads them (navbar-dark bg-primary, the bg-light card, ...).
        // Stripping comments here, before the file ever reaches that later
        // concatenation/minification step, avoids the corruption entirely.
        postCssPlugins: [require(`postcss-discard-comments`)({ removeAll: true })],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `personal-site`,
        short_name: `Portfolio of Jared Chapiewsky`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap-index.xml`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
