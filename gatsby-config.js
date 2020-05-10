module.exports = {
  siteMetadata: {
    title: `Small Pleasures`,
    description: `Small pleasures during corona virus`,
    author: `Lesley Cheung`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: `dc796f00fd9e42a4b22dc5928083aec9`,
        clientSecret: `949bdc8ea95242ee9fdcc4530ed6bcaa`,
        refreshToken: `AQBMtnYO_rGHjTrVPzxXAG6ZmfQ3WKzNYeLMP71847b74ireitY6FkUySeGzGzZ6IGZpbU2YjrowMfXAyJHzyxdKLK4WWoSrCrgIOH8ymSaOSST-IyKHYWz7uQrX61IrKeU`,

        fetchPlaylists: true, // optional. Set to false to disable fetching of your playlists
        fetchRecent: false, // optional. Set to false to disable fetching of your recently played tracks
        timeRanges: ["short_term", "medium_term", "long_term"], // optional. Set time ranges to be fetched
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
