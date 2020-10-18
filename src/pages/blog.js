import { graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Container from "../components/Container"
import BlogPostCard from "../components/BlogPostCard"
function Blog({data}) {
  const allPosts = data.allMarkdownRemark.edges
  
  
  return (
    <Layout>
      <SEO title="Blog Posts" />
      <Hero />
      <hr />
      <Container>
        {allPosts.map(({ node }) => {
          return (
            <BlogPostCard
              key={node.id}
              slug={node.frontmatter.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.postImage.childImageSharp.fluid}
            />
          )
        })}
      </Container>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query BlogPosts {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            slug
            date
            postImage {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`