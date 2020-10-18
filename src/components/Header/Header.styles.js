import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: var(--green);
  padding: 1rem;
  text-align: center;
  a {
    color: white;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
  }

  nav ul a {
    padding: 1rem;
    text-decoration: none;
    font-size:2rem;
    color:black;
  }
  nav ul a.active {
    text-decoration: none;
    font-weight: bold;
  }
  nav ul a:first-child {
    padding-left: 0;
  }
`

