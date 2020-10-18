import {createGlobalStyle} from "styled-components"

export const colors = {
  white: "white",
  greenShade1: "#006a71",
  blackShade1: "black",
  blackShade2: "#333",
}
export const GlobalStyles = createGlobalStyle`
  :root{
    --green:#b4dbdb;
    --site-max-width:1920px;
  }
  body{
  margin:0;
  font-family:Helvetica, sans-serif;
  }
  p{
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 1px;
    line-height: 3.3vh;
  }

  
  article{
    padding:1rem;
  }
  footer{
    padding:1rem;
  }
  .content{
    padding:1rem;
  }
  
  
`

