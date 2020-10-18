import {useStaticQuery,graphql} from "gatsby"


export const useMetadataQuery = ()=>{
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  return data.site.siteMetadata
}

