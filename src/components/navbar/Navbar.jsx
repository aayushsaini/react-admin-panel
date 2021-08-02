import React from 'react';
import "./navbar.scss";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';

const Topbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <div className="nav-left">
                    <span className="logo">Admin Panel<span style={{fontSize:"0.5em"}}>(Netflix)</span> </span>
                </div>
                <div className="nav-right">
                    <div className="nav-icons">
                        <NotificationsNoneIcon />
                        <span className="icon-badge">2</span>
                    </div>
                    <div className="nav-icons">
                        <LanguageIcon />
                        <span className="icon-badge">2</span>
                    </div>
                    <div className="nav-icons">
                        <SettingsIcon />
                    </div>
                    <img 
                     src="https://yt3.ggpht.com/yti/APfAmoEiAUN98YpNxkXiiXFmlEH3byMOa_LxdtuIqFkWIw0=s88-c-k-c0x00ffffff-no-rj-mo" 
                     className="user-avatar"
                     alt="User Profile" 
                     />
                </div>
            </div>
        </div>
    )
}

export default Topbar
