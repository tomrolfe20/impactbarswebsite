import styled from "styled-components";
import ImgBg from '../images/bar2.jpg'

export const ContactContainer = styled.div`
min-height: 100vh;
padding: 5rem 0;
background: url(${ImgBg});
background-position: center;
background-size: cover;
color: #E4F9F5;
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContactBox = styled.div`
background-color: white;
min-width: 30%;
margin: 5px;
padding: 10px;
text-align: center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
`

export const ContactTopLine = styled.p`
  color: #30E3CA;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #40514E;
  text-transform: uppercase;

@media screen and (max-width: 600px) {
    font-size: 18px
}
  `

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #40514E;


  @media screen and (max-width: 600px) {
    font-size: 18px
}
`
