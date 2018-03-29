const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
const Promise = require(`bluebird`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const LandingTemplate = path.resolve(`./src/templates/landing.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
        {
          allContentfulLanding(limit: 1000) {
            edges {
              node {
                id
                node_locale
                slug
              }
            }
          }
        }
    `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // Create pages for each markdown file.
        _.each(result.data.allContentfulLanding.edges, edge => {
          let slug = `/${edge.node.node_locale}/${edge.node.slug}`
          // Overwrite slug for the homepage.
          if (edge.node.slug === '<front>') {
            slug = `/${edge.node.node_locale}/`
          }
          createPage({
            path: slug,
            component: slash(LandingTemplate),
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              id: edge.node.id,
              node_locale: edge.node.node_locale,
              slug: edge.node.slug
            }
          })
        })
      })
    )
  })
}
