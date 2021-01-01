/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

  exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                avec_option
                description
                id_produit
                nom
                options {
                  option
                  valeur
                }
                prix
                images {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
      const data = edge.node.frontmatter
      const slug = edge.node.frontmatter.id_produit
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/components/Produit.jsx`),
        context: { data:data },
      })
    })
  }