import styled from "styled-components";

export const ClientsContainer = styled.div`
min-height: 100vh;
padding: 5rem 0;
background-color: #40514E;
color: #E4F9F5;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 500px;
`;

export const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(64, 81, 79, 0.8);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 480px) {
      opacity: 1;
      background: transparent;

      &:hover {
          background-color: rgba(64, 81, 79, 0.8);
      }
  }
`;

export const ImgTitle = styled.h2`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-align: center;
@media screen and (max-width: 480px) {
    font-size: 32px
}
`;

export const Img = styled.div`
  img {
      display: block;
      width: 100%;
  }
`;