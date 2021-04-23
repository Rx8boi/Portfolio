import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle2,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialLogo,
  SocialIconLink, ReactSvg
} from "./FooterElements";
import LFooter from "../LottieFooter";
import SocialLogo2 from "../Svg";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <FooterContainer>
      <br></br>
      <hr></hr>
      <FooterWrap id="Contact">
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <ReactSvg />
            </FooterLinkItems>
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
              <FooterLink
                target="_blank"
                href="//www.youtube.com/watch?v=m4FLekXCF9E"
              >
                Indeed Snippet
              </FooterLink>
              <FooterLink to="/Resume">Speed Therapy</FooterLink>
              <FooterLink to="/Resume">Media</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle2>Dev Links</FooterLinkTitle2>
              <SocialLogo2 />
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me</FooterLinkTitle>
            
            
                <LFooter />
              
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">gitCharles.com</SocialLogo>
            <WebsiteRights>
              © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>

              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
