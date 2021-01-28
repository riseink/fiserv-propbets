module.exports = {
  siteMetadata: {
    title: `Fiserv Prop Bets`,
    description: `A prop betting website for Superbowl LV`,
    author: `@capture_art`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:300, 400`,
          `Roboto Condensed\:700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fiserv HOF`,
        short_name: `fiserv`,
        start_url: `/`,
        background_color: `#f60`,
        theme_color: `#f60`,
        display: `minimal-ui`,
        icon: `src/images/fiserv-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
