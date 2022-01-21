import styled from "styled-components";

export const TeamContainer = styled.div`
min-height: 100vh;
padding: 5rem 0;
background: #40514E;
color: #E4F9F5;
`;

export const TeamWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
background-position: center;
background-size: cover;
width: 100vw;
`;

export const TeamCard = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
flex-direction: column;
padding: 1rem;
max-width: 300px;
;
`

export const TeamImgContainer = styled.div`

`;

export const TeamTextContainer = styled.div`
text-align: center;
color: white;
border-radius: 1%;
`;

export const TeamImg = styled.img`
height: 300px;
width: auto;
max-width: 250px;
`;

export const TeamHeading = styled.h1`
margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: white;

@media screen and (max-width: 480px) {
    font-size: 32px
}
`;

export const TeamInfo = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: white;
`;



