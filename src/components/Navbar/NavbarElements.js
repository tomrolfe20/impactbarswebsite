import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaBars } from 'react-icons/fa';
 
export const Nav = styled.nav`
  background-color: rgba(64, 81, 78, 0.8);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position: fixed;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 800px) {
    background-color: transparent
  }
`;

export const NavLink = styled(LinkR)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;

  @media screen and (max-width: 400px) {
      position: absolute;
      top: 10px;
      left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: none; 

  @media screen and (max-width: 800px) {
    display: block;
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
  color: #fff;
  };

  p {
      transform: translate(-175%, 100%);
      font-weight: bold;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 3rem;
  transform: translate(-50%, -15%);
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export const NavItem = styled.div`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    border-bottom: 3px solid #30E3CA;
  }
`