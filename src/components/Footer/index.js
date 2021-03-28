import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink } from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Me
                            </FooterLinkTitle>
                            <FooterLink to='/Resume'></FooterLink>
                            <FooterLink to='/Resume'>Bio</FooterLink>
                        </FooterLinkItems>
                        
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Built With
                            </FooterLinkTitle>
                            <FooterLink to='/'>ReactJs</FooterLink>
                            <FooterLink to='/'>ReactRouter</FooterLink>
                            <FooterLink to='/Resume'>React Icons</FooterLink>
                            <FooterLink to='/Resume'>React Timeline</FooterLink>
                            <FooterLink to='/Resume'>React Scroll</FooterLink>
                            <FooterLink to='/Resume'>Stylized Components</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Media Links
                            </FooterLinkTitle>
                            <FooterLink to='/Resume'>Indeed Snippet</FooterLink>
                            <FooterLink to='/Resume'>Speed Therapy</FooterLink>
                            <FooterLink to='/Resume'>Media</FooterLink>
                            <FooterLink to='/Resume'>Social Media</FooterLink>
                            <FooterLink to='/Resume'>Contact</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Social media
                            </FooterLinkTitle>
                            <FooterLink to='/Resume'></FooterLink>
                            <FooterLink to='/Resume'>Instagram</FooterLink>
                            <FooterLink to='/Resume'>Facebook</FooterLink>
                            <FooterLink to='/Resume'>Twitter</FooterLink>
                            <FooterLinkTitle>
                                Contact
                            </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer> 
    );
}

export default Footer
