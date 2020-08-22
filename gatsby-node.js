const path = require("path")

const createArticlePages = async (graphql, createPage) => {
  const articleTemplate = path.resolve(`src/components/layouts/article.js`)
  const { data } = await graphql(`
    query AllArticles {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.*content/articles/.*/" } }
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (data.allMdx.edges.length > 0) {
    data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/article/${node.slug}`,
        component: articleTemplate,
        context: {
          id: node.id,
        },
      })
    })
  }

  return Promise.resolve()
}

const createBlogPages = async (graphql, createPage) => {
  const blogTemplate = path.resolve(`src/components/layouts/blog.js`)
  const { data } = await graphql(`
    query AllBlogs {
      allMdx(filter: { fileAbsolutePath: { regex: "/.*content/blogs/.*/" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (data.allMdx.edges.length > 0) {
    data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogTemplate,
        context: {
          id: node.id,
        },
      })
    })
  }

  return Promise.resolve()
}

const createTutorialPages = async (graphql, createPage) => {
  const tutorialTemplate = path.resolve(
    `src/components/layouts/tutorial-list.js`
  )
  const { data } = await graphql(`
    query AllTutorials {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/.*content/tutorials/.*/" } }
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              tutorialId
            }
          }
        }
      }
    }
  `)

  if (data.allMdx.edges.length > 0) {
    data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: `/tutorial/${node.slug}`,
        component: tutorialTemplate,
        context: {
          id: node.id,
          tutorialId: node.frontmatter ? node.frontmatter.tutorialId : null,
        },
      })
    })
  }

  return Promise.resolve()
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await createArticlePages(graphql, createPage)
  await createTutorialPages(graphql, createPage)
  await createBlogPages(graphql, createPage)
}
