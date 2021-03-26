import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';



const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="TimeLine" onClick={toggle}>
              TimeLine
            </SidebarLink>
            <SidebarLink to="Projects" onClick={toggle}>
              Projects
            </SidebarLink>
            <SidebarLink to="Blog" onClick={toggle}>
              Blog
            </SidebarLink>
            <SidebarLink to="Contact" onClick={toggle}>
              Contact
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/Resume">Resume</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar
