import React from "react"
import { Helmet } from "react-helmet"
import { useMetadataQuery } from "../../hooks/useSiteMetadata"

const SEO = ({ title, description, lang = `en` }) => {
  const data = useMetadataQuery()

  const seo = {
    title: title || data.title,
    description: description || data.description,
  }
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={`%s | ${data.title}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
    </Helmet>
  )
}

export default SEO
