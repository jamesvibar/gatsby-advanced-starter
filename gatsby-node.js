// eslint-disable-next-line no-unused-vars
const path = require('path')
// Remove trailing slashes unless it's only "/", then leave it as it is
const replaceTrailing = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))
// Remove slashes at the beginning and end
const replaceBoth = _path => _path.replace(/^\/|\/$/g, '')

/**
 * GraphQL Promise Wrapper by @lekoarts
 * @desc: GraphQL functions doesn't throw it's errors so
 * you manually have to check for result.errors and throw an
 * error. Otherwise errors would get swallowed.
 */
// const wrapper = promise => {
//   promise.then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//     return result
//   })
// }

/**
 * Take the pages from src/pages and generate all the pages.
 */
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // First delete the pages so we can re-create them.

  if (page.path.includes('404')) {
    return
  }
  deletePage(page)

  // Remove trailing slash from path. e.g /blog/ => /blog
  page.path = replaceTrailing(page.path)
  // Remove leading and trailing slash from path. e.g /blog/ => blog
  const name = replaceBoth(page.path)
  console.log(`Page path: ${page.path}, Name: ${name}`)
  return createPage({
    ...page,
    path: page.path,
    context: {
      name, // We use name for our graphql queries within our src/pages
    },
  })
}
