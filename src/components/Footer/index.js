import React from "react"
import Container from "../Container"

const Footer = ({title}) => {
  return (
    <footer>
      <Container>
        <hr />
        <p> @copyright {title} </p>
      </Container>
    </footer>
  )
}

export default Footer
