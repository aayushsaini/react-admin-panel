import React from 'react';
import "./sidebarMenu.scss";
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Link } from 'react-router-dom';

const SidebarMenu1 = () => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-title">Dashboard</div>
            <div className="sidebar-list">
                <li className="sidebar-list-item active">
                    <LineStyleIcon className="sidebar-icon" /> 
                    <Link className="sidebar-link" to="/">
                        <span className="icon-text">Home</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <TimelineIcon className="sidebar-icon" /> <span className="icon-text">Analytics</span>
                </li>
                <li className="sidebar-list-item">
                    <TrendingUpIcon className="sidebar-icon" /> <span className="icon-text">Sales</span>
                </li>  
            </div>
        </div>
    )
}

export default SidebarMenu1
