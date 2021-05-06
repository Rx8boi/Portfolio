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
  SocialIconLink,
  ReactSvg,
} from "./FooterElements";
import SocialLogo2 from "../Svg";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <br></br>
      <hr></hr>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <ReactSvg />
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Built With</FooterLinkTitle>
              <FooterLink
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                aria-label="ReactJs"
              >
                ReactJs
              </FooterLink>
              <FooterLink
                href="https://reactrouter.com/"
                target="_blank"
                aria-label="React Router"
              >
                ReactRouter
              </FooterLink>
              <FooterLink
                href="https://react-icons.github.io/react-icons/"
                target="_blank"
                aria-label="React Icons"
              >
                React Icons
              </FooterLink>
              <FooterLink
                href="https://www.npmjs.com/package/react-vertical-timeline-component"
                target="_blank"
                aria-label="React Vertical Timeline Component"
              >
                React Vertical Timeline
              </FooterLink>
              <FooterLink
                href="https://www.npmjs.com/package/react-scroll"
                target="_blank"
                aria-label="React Scroll"
              >
                React Scroll
              </FooterLink>
              <FooterLink
                href="https://styled-components.com/"
                target="_blank"
                aria-label="Styled Components"
              >
                Styled Components
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Featured Media</FooterLinkTitle>
              <FooterLink
                target="_blank"
                href="//www.youtube.com/watch?v=m4FLekXCF9E"
              >
                Indeed Snippet
              </FooterLink>
              <FooterLink target="_blank" href="https://youtu.be/cQDkGdtMu-E">
                Speed Therapy
              </FooterLink>
              <FooterLink to="/Resume">Other Media</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle2>Dev Links</FooterLinkTitle2>
              <SocialLogo2 />
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Hosted With</FooterLinkTitle>
              <FooterLink target="_blank" href="https://cpanel.net/">
                CPanel
              </FooterLink>
              <FooterLink target="_blank" href="https://www.godaddy.com/">
                GoDaddy.com
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">gitCharles.com</SocialLogo>
            <WebsiteRights> 
              © {new Date().getFullYear()} All rights reserved. v2.2
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/charlesbutler8"
                target="_blank"
                aria-label="Charles' Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.instagram.com/charles.atx/"
                target="_blank"
                aria-label="Charles' Instagram"
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
