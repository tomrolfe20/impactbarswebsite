import styled from "styled-components";
import ImgBg from '../images/backgroundimage1.jpg'

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
  background-color: rgba(64, 81, 79, 0.8);
min-width: 30%;
margin: 50px;
padding: 10px;
text-align: center;
display: flex;
flex-wrap: wrap;
flex-direction: column;
`
export const ContactBoxContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;


export const ContactTopLine = styled.h2`
font-size: 32px;
line-height: 1.1;
font-weight: 600;
color: #30E3CA;
text-align: center;
margin-bottom: 16px;
@media screen and (max-width: 480px) {
  font-size: 32px
}
`;


styled.h1`
  color: #30E3CA;
  font-size: 19px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  
`

export const Heading = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  /* line-height: 1.1; */
  font-weight: 100;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

@media screen and (max-width: 600px) {
    font-size: 18px
}
  `

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #fff;


  @media screen and (max-width: 600px) {
    font-size: 18px
}
`

export const ContactImage = styled.div`
img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px;
}
`;
