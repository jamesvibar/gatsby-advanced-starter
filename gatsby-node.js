const siteConfig = require('./data/SiteConfig')
const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {
//   const { data } = await graphql(`
//     query {
//       allContentfulLayout {
//         edges {
//           node {
//             title
//             slug
//             contentModules {
//               headline
//               textline {
//                 textline
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   data.allContentfulLayout.edges.forEach(edge => {
//     const { slug } = edge.node;

//     // Create homepage
//     actions.createPage({
//       path: `/`,
//       component: path.resolve(`./src/`)
//     })
//   })
// }
