import React from 'react';
import "./userProfileWidget.scss";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';

const UserProfileWidget = (props) => {

    const userAvatarSrc = props.userAvatarSrc;;
    const userName = props.userName;
    const userPos = props.userPos;

    return (
        <div className="userProfile">
            <img src={userAvatarSrc} 
             alt=""
             className="user-profile-pic"
             />
             <div className="user-info-wrapper">
                <div className="user-info">
                    <span className="user-name">{userName}</span>
                    <span className="user-pos">{userPos}</span>
                </div>
                <button>
                    <VisibilityOutlinedIcon fontSize="small" /> <span>Display</span>
                </button>
             </div>
        </div>
    )
}

export default UserProfileWidget
