import React from 'react'
import {Wrapper,HeroImage,Content} from "./BigImage.styles"



const BigImage = ({fluid, title, className, children }) => (
  <Wrapper>
    <HeroImage fluid={fluid} title={title}/>
    
    <Content className={className}>{children}</Content>
  </Wrapper>
)


export default BigImage
