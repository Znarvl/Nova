import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useState } from 'react'
import {SidebarData} from './SidebarData'
import Submenu from './SubMenu'
import './css/Sidebar.css'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
   margin-left: 2rem;
   font-size: 2rem;
   height: 80px;
   display: flex;
   justify-content: flex-start;
   align-items: center;
`;

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
    transition: 700ms;
    z-index: 10;
`;

const SidebarWrap = styled.nav`
    width: 100%;
`

export const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () =>  setSidebar(!sidebar)
    return (
        <>
        <Nav>
            <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </NavIcon>
            <h1 className="navBarText">Nova Tradgard</h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </NavIcon>
                {SidebarData.map((item,index) => {
                    return <Submenu item={item} key={index} />;

                })}

            </SidebarWrap>
        </SidebarNav>
        </>
    );
};
export default Sidebar;
