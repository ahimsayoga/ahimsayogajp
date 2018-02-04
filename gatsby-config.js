require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ahimsa Gatsby Site`
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
      }
    },
    `gatsby-transformer-remark`
  ]
}
