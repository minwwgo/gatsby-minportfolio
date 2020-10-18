import React from "react"
import {Link} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Container from "../components/Container"


const Home=()=> {
  return (
    <Layout>
      <SEO title="Welcome to Min Blog" />
      <Container>
        <h1>Hello world!</h1>
       
          
        
        <p>
          Go back <Link to={"/about"}>About</Link>
        </p>

      </Container>
    </Layout>
  )
}

export default Home;