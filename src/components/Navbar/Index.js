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
  NavBtnLink,
  FileDownload
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">gitCharles.com</NavLogo>
          <MobileIcon onClick={toggle}>
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
              <NavLinks to="Contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to= "../../../public/Charles2021.pdf" target="_blank" download>
              <FileDownload /> Download
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
