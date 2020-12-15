module.exports = {
  siteMetadata: {
    title: `Spark Racer`,
    description: `Le meilleur endroit pour devenir un meilleur pilote.`,
    author: `@gougou934`,
    lang: `fr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Spark Racer`,
        short_name: `Spark Racer`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.GATSBY_SNIPCART_API_KEY
      }
    }
  ],
}
