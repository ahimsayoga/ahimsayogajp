module.exports = {
  siteMetadata: {
    title: 'Ahimsa Yoga'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-98124033-1`
      }
    },
    `gatsby-plugin-offline`
  ]
}
