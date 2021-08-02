import React from 'react';
import "./sidebar.scss";
import SidebarMenu1 from '../sidebarMenu/SidebarMenu1';
import SidebarMenu2 from '../sidebarMenu/SidebarMenu2';
import SidebarMenu3 from '../sidebarMenu/SidebarMenu3';
import SidebarMenu4 from '../sidebarMenu/SidebarMenu4';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
               <SidebarMenu1 />
               <SidebarMenu2 />
               <SidebarMenu3 />
               <SidebarMenu4 />
            </div>
        </div>
    )
}

export default Sidebar
