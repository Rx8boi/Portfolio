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
  AdvertisementFill,
  AdvertisementLine
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { useState } from 'react';


const Navbar = ({ toggle }) => {
      const [hover, setHover] = useState(false);

      const onHover = () => {
        setHover(!hover);
      };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavLinks to="home">gitCharles.com</NavLinks>
          </NavLogo>
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
              <NavLinks to="Projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/Resume" onMouseEnter={onHover} onMouseLeave={onHover}>
              {hover ? <AdvertisementLine /> : <AdvertisementFill />} Resume
            </NavBtnLink>

            {/* <NavBtnLink
              to="../../../public/Charles2021.pdf"
              target="_blank"
              download
            >
              <FileDownload /> Download
            </NavBtnLink> */}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
