const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postsQuery = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (postsQuery.errors) {
    reporter.panic("unable to create posts", postsQuery.errors)
  }
  const allPosts = postsQuery.data.posts.edges
  
  allPosts.forEach(({node})=>{
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: require.resolve(`./src/templates/Post.js`),
      context:{
        slug: node.frontmatter.slug,
      },
    })
  })
}
