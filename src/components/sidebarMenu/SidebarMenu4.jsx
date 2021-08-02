import React from 'react';
import "./sidebarMenu.scss";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import TimelineIcon from '@material-ui/icons/Timeline';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';


const SidebarMenu4 = () => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-title">Staff</div>
            <div className="sidebar-list">
                <li className="sidebar-list-item">
                    <WorkOutlineIcon className="sidebar-icon" /> <span className="icon-text">Manage</span>
                </li>
                <li className="sidebar-list-item">
                    <TimelineIcon className="sidebar-icon" /> <span className="icon-text">Analytics</span>
                </li>
                <li className="sidebar-list-item">
                    <ReportOutlinedIcon className="sidebar-icon" /> <span className="icon-text">Reports</span>
                </li>  
            </div>
        </div>
    )
}

export default SidebarMenu4