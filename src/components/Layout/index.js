import React from "react"
import Header from "../Header"
import Footer from "../Footer"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { useMetadataQuery } from "../../hooks/useSiteMetadata"

const Layout = ({ children }) => {
  const data = useMetadataQuery()
  return (
    <>
      <GlobalStyles />
      <Header title={data.title} description={data.description} />
      <main>{children}</main>
      <Footer title={data.title} />
    </>
  )
}

export default Layout
