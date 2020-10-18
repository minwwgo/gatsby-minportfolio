import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"
//component

import Container from "../Container"
//hooks
import useHerodata from "../../hooks/useHerodata"
//styles
import {
  HeroWrapper,
  TextWrapper,
  ImageWrapper,
  ContentWrapper,
} from "./Hero.styles"

const Hero = () => {
  const {
    heroImage,
    heroImageText,
    heroImageBtnText,
    heroImageBtnLink,
  } = useHerodata()
  return (
    <HeroWrapper>
      <Container>
        <ContentWrapper>
          <TextWrapper>
            <Link to={heroImageBtnLink}>
              <h2>{heroImageText}</h2>
              <h3>{heroImageBtnText}</h3>
            </Link>
          </TextWrapper>
          <ImageWrapper>
            <Img title="heroImage" fluid={heroImage.childImageSharp.fluid} />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
