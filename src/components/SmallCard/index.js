import React from "react"
import { ImageWrapper } from "./SmallCard.styles"

const SmallCard = ({ title, fluid }) => (
  <ImageWrapper fluid={fluid} title={title} />
)
export default SmallCard
