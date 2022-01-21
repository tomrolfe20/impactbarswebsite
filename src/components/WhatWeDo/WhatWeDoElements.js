import styled from "styled-components";
import ImgBg from '../images/festival10.jpg';

export const WhatWeDoTextContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
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
background-color: white;
width: 50vw;
padding: 5rem;

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
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#40514E')};
  text-align: center;
@media screen and (max-width: 480px) {
    font-size: 32px
}
`;


export const WhatWeDoP = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;
