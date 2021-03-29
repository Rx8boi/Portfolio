import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
    FooterLink,
  FooterLinkTitle2
} from "./FooterElements";
import LContact from "../LottieContact.js";
import LFooter from "../LottieFooter";
import SocialLogo from "../Svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Built With</FooterLinkTitle>
              <FooterLink to="/">ReactJs</FooterLink>
              <FooterLink to="/">ReactRouter</FooterLink>
              <FooterLink to="/Resume">React Icons</FooterLink>
              <FooterLink to="/Resume">React Timeline</FooterLink>
              <FooterLink to="/Resume">React Scroll</FooterLink>
              <FooterLink to="/Resume">Stylized Components</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Featured Media</FooterLinkTitle>
              <FooterLink to="/Resume">Indeed Snippet</FooterLink>
              <FooterLink to="/Resume">Speed Therapy</FooterLink>
              <FooterLink to="/Resume">Media</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle2>Social</FooterLinkTitle2>
              <SocialLogo />
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me on LinkedIn</FooterLinkTitle>
              <LFooter />
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
