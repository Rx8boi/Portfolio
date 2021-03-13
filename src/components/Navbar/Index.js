import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
    NavLinks,
    NavBtn,
  NavBtnLink
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">gitCharles.com</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="TimeLine">TimeLine</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Resume">Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contact">Contact Me</NavLinks>
            </NavItem>
                  </NavMenu>
                  <NavBtnLink to="/Projects">Projects</NavBtnLink>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
