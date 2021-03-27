import React from "react";
import { ResumeContainer, ResumeWrapper } from "./ResumeElements";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBtn,
  NavBtnLink,
  NavBtnLinko,
  FileDownload,
  ChevronLeft,
  ChevronsLeft,
  MobileIcon
} from "../Navbar/NavbarElements";
import { useState } from "react";


const Resume = (toggle) => {
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
                {hover ? <ChevronsLeft /> : <ChevronLeft />}Back
              </NavBtnLink>
            </NavBtn>
          </NavLogo>
          <NavBtnLinko to="/">
            <ChevronsLeft />
            Back
          </NavBtnLinko>
          <br></br>
          <NavBtnLinko
            to="../../../public/Charles2021.pdf"
            target="_blank"
            download
          >
            <FileDownload /> Download
          </NavBtnLinko>

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
