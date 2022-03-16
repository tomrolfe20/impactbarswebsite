import styled from "styled-components";
import ImgBg from '../images/backgroundimage1.jpg';

export const WhatWeDoTextContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),
  url(${ImgBg});
  min-height: 100vh; 
  background-position: center;
  background-size: cover;
  color: #40514E;
  display: flex;
  flex-wrap: flex;
  justify-content: center;
  align-items: center;
`
export const WhatWeDoTextWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
text-align: justify;
width: 60vw;
padding: 2rem;
background-color: rgba(64, 81, 79, 0.8);

@media screen and (max-width: 900px) {
   padding: 30px;
   width: 100vw;   
}
`;

export const WhatWeDoH2 = styled.h2`
margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#40514E')}; */
  color: #fff;
  text-align: center;
@media screen and (max-width: 480px) {
    font-size: 32px
}
`;


export const WhatWeDoP = styled.p`
  text-align: left;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const WhatWeDoH1 = styled.h1`
font-size: clamp(2rem, 10vw, 5rem);
text-align: center;
margin-bottom: 2rem;
color: #30E3CA;
`
