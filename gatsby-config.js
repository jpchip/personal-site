module.exports = {
  siteMetadata: {
    title: `Jared Chapiewsky`,
    description: `Portfolio of Jared Chapiewsky.`,
    author: `Jared Chapiewsky`,
    baseUrl: `https://frosty-lovelace-b70f5c.netlify.com`
  },
  plugins: [
	  `gatsby-transformer-json`,
	  {
		  resolve: `gatsby-source-filesystem`,
		  options: {
			  path: `${__dirname}/src/data`,
		  },
	  },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `mylifeintheservice.wordpress.com`,
        protocol: `https`,
        hostingWPCOM: true,
        useACF: false
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
