import React from 'react'
import {Link} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Container from "../components/Container"
const About=() =>{
  return (
    <Layout>
      <SEO title="About us" />
      <Container>
        <h1>About page !</h1>
        <p>
          Go back <Link to={"/"}>Home</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default About
