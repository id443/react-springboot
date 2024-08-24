import { MenuIconClose, MenuIconOpen, MenuItemLinks, MenuItems, SidebarMenu } from "@material-ui/icons/Menu";
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Navbar } from 'reactstrap';
import { SidebarData } from './SidebarData';
const Sidebar = () => {
    const [close, setClose] = useState(false)
    const showSidebar = () => setClose(!close)
    return (
        <>
            <Navbar>
                <MenuIconOpen to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar>

            <SidebarMenu close={close}>
                <MenuIconClose to="#" onClick={showSidebar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </>
    )
}
export default Sidebar