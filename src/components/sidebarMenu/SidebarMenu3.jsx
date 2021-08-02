import React from 'react';
import "./sidebarMenu.scss";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const SidebarMenu3 = () => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-title">Notifications</div>
            <div className="sidebar-list">
                <li className="sidebar-list-item">
                    <MailOutlineIcon className="sidebar-icon" /> <span className="icon-text">Mail</span>
                </li>
                <li className="sidebar-list-item">
                    <DynamicFeedIcon className="sidebar-icon" /> <span className="icon-text">Feedback</span>
                </li>
                <li className="sidebar-list-item">
                    <ChatBubbleOutlineIcon className="sidebar-icon" /> <span className="icon-text">Messages</span>
                </li>  
            </div>
        </div>
    )
}

export default SidebarMenu3