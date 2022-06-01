/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `The Muslim's Dashboard`,
    siteUrl: `https://www.themuslimsdashboard.com`,
    description: `A new-tab Chrome extension that provides everything a Muslim needs at a glance – accurate prayer times, updated weather forecast, Qur'an and Hadith reminders, plus more in the works.`,
  },
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
    {
      resolve: `gatsby-plugin-next-seo`,
      options: {
        language: `en`,
        titleTemplate: `%s | The Muslim's Dashboard`,
        openGraph: {
          type: `website`,
          locale: `en_GB`,
          url: `https://www.themuslimsdashboard.com`,
          site_name: `The Muslim's Dashboard`,
        },
        twitter: {
          cardType: `summary_large_image`,
        },
      },
    },
  ],
}
