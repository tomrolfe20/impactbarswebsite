import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import dancers from '../images/dancers.svg';
import ImgBg from '../images/festivalsatdown.jpg'

export const WorkContainer = styled.div`
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

export const WorkBox = styled.div`
display: flex;
flex-wrap: wrap;
height: 400px;
min-width: 400px;
max-width: 1000px;
background: url(${dancers});
background-position: center;
background-repeat: no-repeat;
justify-content: center;
align-content: space-around;

@media screen and (max-width: 600px) {
  min-width: 80%;
}
`

export const WorkLink = styled(LinkR)`
  white-space: nowrap;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  font-size: 2rem;
  text-align: center;
  font-family: 'Kanit', sans-serif;
`

export const TextBackground = styled.button`
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