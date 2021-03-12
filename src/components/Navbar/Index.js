import React from "react";
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
                  <NavLogo to='/'>gitCharles.com</NavLogo>
                  <MobileIcon>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about'>About</NavLinks>
                          <NavLinks to='TimeLine'>TimeLine</NavLinks>
                          <NavLinks to='Resume'>Resume</NavLinks>
                          <NavLinks to='Contact'>Contact Me</NavLinks>
                      </NavItem>
                  </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
