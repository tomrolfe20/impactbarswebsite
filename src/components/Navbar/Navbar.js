import React from 'react';
import { Nav, NavIcon, Bars, NavMenu, NavItem, NavLinks } from './NavbarElements'




const Navbar = ({toggle}) => {

return (
      <>
      <Nav>
        <NavIcon onClick={toggle}>  
          <Bars />
        </NavIcon>
        <NavMenu>
          <NavItem><NavLinks to='testimonials'>Testimonials</NavLinks></NavItem>
          <NavItem><NavLinks to='whatwedo'>What we do</NavLinks></NavItem>
          <NavItem><NavLinks to='team'>Team</NavLinks></NavItem>
          <NavItem><NavLinks to='work'>Work</NavLinks></NavItem>
          <NavItem><NavLinks to='previousevents'>Events</NavLinks></NavItem>
          <NavItem><NavLinks to='contact'>Contact</NavLinks></NavItem>
        </NavMenu>
      </Nav>
      </>
    );
  }


export default Navbar;