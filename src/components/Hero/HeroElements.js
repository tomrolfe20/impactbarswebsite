import styled from "styled-components";
import ImgBg from '../images/backgroundimage2.jpg';
import { Link as LinkS } from 'react-scroll'

export const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
  url(${ImgBg});
  /* background: url(${ImgBg}); */
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  
`

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) /2);
`

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  min-width: 650px;
  color: #E4F9F5;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
      width: 100%;
  }
`
export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  color: #30E3CA;
  padding-bottom: 1rem;
`

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
  height: 80px;
`

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #11999E;
  color: #fff;
  transition: 0.2s ease-out;

  @media screen and (max-width: 600px) {
    padding: 1rem;
};

  &:hover {
      background: #E4F9F5;
      transition: 0ms.2s ease-out;
      cursor: pointer;
      color: #40514E;
  }
`

export const HeroLink = styled(LinkS)`
`