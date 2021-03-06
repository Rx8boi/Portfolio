import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { MdFileDownload } from "react-icons/md";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { RiProfileFill } from "react-icons/ri";
import { RiProfileLine } from "react-icons/ri";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  /*margin-top: -80px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width: 960px) {
    transition: 0.8s all escape;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding:  2px;
  max-width: 1500px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  text-decoration: none;
  
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20;
    right: 20;
    transform: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: -30px;
  position: relative;
  top: 3px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  //hover underline of active navitem
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 6px 22px;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  height: 38px;
  position: relative;
  /* top: 17px; */
  right: 16px;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: #010606;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinko = styled(LinkR)`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 6px 22px;
  color: white;
  font-size: 18px;
  outline: none;
  border: none;
  text-decoration: none;
  height: 50px;
  position: relative;
  right: 100px;
  top: 16px;
  display: none;

  @media screen and (max-width: 768px) {
    display: initial;
  }

  @media screen and (max-width: 520px) {
    right: 30px;
  }
  @media screen and (max-width: 420px) {
    right: 35px;
  }
`;

export const FileDownload = styled(MdFileDownload)`
  position: relative;
  top: 4px;
  font-size: 20px;

`;
export const FileDownloado = styled(MdFileDownload)`
  position: relative;
  top: 4px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    display: initial;
  }
`;
export const ChevronLeft = styled(BiChevronLeft)`
  position: relative;
  top: 4px;
  font-size: 20px;
  
`;
export const ChevronsLeft = styled(BiChevronsLeft)`
  position: relative;
  top: 4px;
  font-size: 20px;
  
`;
export const AdvertisementFill = styled(RiProfileFill)`
  position: relative;
  top: 4px;
  font-size: 20px;
`;

export const AdvertisementLine = styled(RiProfileLine)`
  position: relative;
  top: 4px;
  font-size: 20px;
`;