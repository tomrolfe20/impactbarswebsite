import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Kanit', sans-serif;
      scroll-behavior: smooth;
      overflow-x: hidden;
  }
`;

export const GlobalHeading = styled.h1`
font-size: clamp(2rem, 10vw, 5rem);
text-align: center;
margin-bottom: 5rem;
color: #30E3CA;
`