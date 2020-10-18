import {useStaticQuery,graphql} from "gatsby"


const useHerodata =()=>{
  const data = useStaticQuery(graphql`
    query HeroQuery {
      markdownRemark(frontmatter: { type: { eq: "hero" } }) {
        frontmatter {
          heroImage {
            childImageSharp {
              fluid(maxWidth:1080,maxHeight:1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroImageBtnLink
          heroImageBtnText
          heroImageText
        }
      }
    }
  `)
  return data.markdownRemark.frontmatter

}
export default useHerodata