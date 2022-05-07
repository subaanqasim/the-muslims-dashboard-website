/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-mantine`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Muslim's Dashboard`,
        short_name: `The Muslim's Dashboard`,
        start_url: `/`,
        background_color: `#1a1b1e`,
        theme_color: `#15aabf`,
        display: `standalone`,
        icon: `./src/assets/logos/tmd128.png`,
      },
    },
  ],
}
