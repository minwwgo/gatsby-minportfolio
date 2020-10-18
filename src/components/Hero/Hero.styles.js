import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

export const HeroWrapper = styled.div`
  background: radial-gradient(circle, #b0ddda, #b4dbdb);
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const ImageWrapper = styled.div`
  width: 75vw;
  margin: 30px;

  img {
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 15vw;
  }
`

export const TextWrapper = styled.div`
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1px;

  a {
    text-decoration: none;
  }
  h2 {
    color: ${colors.blackShade1};

    @media screen and (min-width: 768px) {
      font-size: 2.8rem;
      top: 0;
    }
  }
  h3 {
    color: ${colors.blackShade1};
    font-size: 0.8rem;
    font-weight: bolder;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`
