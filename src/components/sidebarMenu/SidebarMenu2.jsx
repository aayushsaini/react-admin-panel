import React from 'react';
import "./sidebarMenu.scss";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import { Link } from "react-router-dom";

const SidebarMenu2 = () => {
    return (
        <div className="sidebar-menu">
            <div className="sidebar-title">Quick Access</div>
            <div className="sidebar-list">
                <li className="sidebar-list-item">
                    <PermIdentityIcon className="sidebar-icon" /> 
                    <Link className="sidebar-link" to="/users">
                        <span className="icon-text">Users</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <StorefrontIcon className="sidebar-icon" /> 
                    <Link className="sidebar-link" to="/products">
                        <span className="icon-text">Products</span>
                    </Link>
                </li>
                <li className="sidebar-list-item">
                    <AttachMoneyIcon className="sidebar-icon" /> <span className="icon-text">Transactions</span>
                </li>  
                <li className="sidebar-list-item">
                    <BarChartIcon className="sidebar-icon" /> <span className="icon-text">Reports</span>
                </li>  
            </div>
        </div>
    )
}

export default SidebarMenu2