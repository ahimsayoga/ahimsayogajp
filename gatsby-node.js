const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)
const Promise = require(`bluebird`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const GeneralTemplate = path.resolve(`./src/templates/general.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
        {
          allContentfulGeneral(limit: 1000) {
            edges {
              node {
                id
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
        _.each(result.data.allContentfulGeneral.edges, edge => {
          createPage({
            path: `/general/${edge.node.id}/`,
            component: slash(GeneralTemplate),
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              id: edge.node.id
            }
          })
        })
      })
    )
  })
}
