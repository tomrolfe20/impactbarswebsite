import React from 'react'

import { 
    SidebarContainer,
    SidebarMenu,
    SidebarLink,
    Icon,
    CloseIcon
    
 } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to='whatwedo' onClick={toggle}>What we do</SidebarLink>
                <SidebarLink to='clients' onClick={toggle}>Clients</SidebarLink>
                <SidebarLink to='work' onClick={toggle}>Work</SidebarLink>
                <SidebarLink to='testimonials' onClick={toggle}>Testimonials</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
            </SidebarMenu>

        </SidebarContainer>
    )
}

export default Sidebar;