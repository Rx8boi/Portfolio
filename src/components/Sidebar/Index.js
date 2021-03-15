import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';



const Sidebar = () => {
    return (
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="TimeLine">TimeLine</SidebarLink>
          <SidebarLink to="Resume">Resume</SidebarLink>
                <SidebarLink to="Contact">Contact</SidebarLink>
                <SideBtnWrap>
                    <SidebarRoute to="/projects">Projects</SidebarRoute>
                </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar
