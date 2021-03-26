import React from "react";
import { ResumeContainer, ResumeWrapper } from "./ResumeElements";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtn,
  NavBtnLink,
  FileDownload,
} from "../Navbar/NavbarElements";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { useState } from "react";


const Resume = () => {
      const [hover, setHover] = useState(false);

      const onHover = () => {
        setHover(!hover);
      };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo>
            <NavBtn>
              <NavBtnLink to="/" onMouseEnter={onHover} onMouseLeave={onHover}>
                {hover ? <BiChevronsLeft /> : <BiChevronLeft />}Back to
                gitCharles.com
              </NavBtnLink>
            </NavBtn>
          </NavLogo>
          <NavBtn>
            <NavBtnLink
              to="../../../public/Charles2021.pdf"
              target="_blank"
              download
            >
              <FileDownload /> Download
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <ResumeContainer id="Resume">
        <ResumeWrapper />
      </ResumeContainer>
    </>
  );
};

export default Resume;
