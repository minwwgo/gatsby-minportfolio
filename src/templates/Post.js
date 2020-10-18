import React from 'react'
import Layout from "../components/Layout"
import {graphql} from "gatsby"
import SEO from "../components/SEO"
import Container from "../components/Container"


const Post=({data})=> {
  const post = data.markdownRemark
  
  return (
    <Layout>
      <SEO title={`${post.frontmatter.title}`} />
      <Container>
        <h1> {post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
    </Layout>
  )
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        
      }
      fields {
        readingTime {
          text
        }
      }
      excerpt
    }
  }
`