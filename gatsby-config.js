module.exports = {
  siteMetadata: {
    name: `PHONES:ON`,
    title: `PHONES:ON | new music with smartphones`,
    description: `PHONES:ON is an interactive concert of new music and sound installations that all allow or specifically require different ways of using smartphones in the performance.`,
    image: `https://phoneson.art/assets/images/boxspot.jpg`,
    keywords: ["music", "art"],
    siteUrl: `https://phoneson.art/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PHONES:ON`,
        short_name: `PHONES:ON`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
