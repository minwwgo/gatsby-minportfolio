import styled,{css} from "styled-components"
import {colors} from "../../styles/GlobalStyles"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  margin:20px 0 ;
  

  @media screen and (min-width: 768px) {
    flex-direction: row;
    min-height: 150px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`
export const ImgWrapper = styled.div`
  width: 90vw;
  margin-bottom: 20px;
  margin-top: 20px;
  padding:20px;

  @media screen and (min-width: 768px) {
    margin: 0 0 20px 0;
    width: 250px;
  }
  img {
    border-radius: 10px;
  }
`
export const TextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  max-width: 800px;
  letter-spacing: 1px;
  line-height: 3.3vh;
@media screen and (min-width: 768px) {
  display:block;
}
  h2 {
    margin: 0;
    color: ${colors.blackShade2};
    cursor: pointer;
    letter-spacing: 2px;
    
  }
  a {
    text-decoration: none;
  }
`
export const StatWrapper = styled.div `
  display:flex;
  align-items:center;
  margin:20px 0;
`
const sharedStyle = css `
  display:flex;
  align-items:center;
  font-size:0.8rem;
  margin-right:20px;
  

  img{
    margin:0 10px 0 0;

  }
`
export const DateWrapper =styled.div `
  ${sharedStyle}
`
export const ReadingTimeWrapper = styled.div`
  ${sharedStyle}
`