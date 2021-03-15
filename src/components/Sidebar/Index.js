import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';



const Sidebar = () => {
    return (
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/">Intro</SidebarLink>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="TimeLine">TimeLine</SidebarLink>
            <SidebarLink to="Resume">Resume</SidebarLink>
            <SidebarLink to="Contact">Contact</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/projects">Projects</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar
