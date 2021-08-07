import React from 'react';
import "./user.scss";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublishIcon from '@material-ui/icons/Publish';

const User = () => {
    return (
        <div className="user">
            <div className="user-title-container">
                {/* <h1 className="user-title">Edit User</h1> */}
                <h1 className="title">Edit User</h1>
                <button className="add-user-btn">Create</button>
            </div>
            <div className="user-container">
                <div className="user-show">
                    <div className="user-show-top">
                        <img 
                         src="https://thispersondoesnotexist.com/image" 
                         alt="" 
                        />
                        <div className="user-show-top-title">
                            <span className="user-show-user">Harrisson Wells</span>
                            <span className="user-show-title">Marketing Head</span>
                        </div>
                    </div>
                    <div className="user-show-bottom">
                        <div className="user-show-section">Account Details</div>
                        <div className="user-info">
                            <PermIdentityIcon className="user-show-icon" />
                            <span className="user-show-user-info">@hr_wells</span>
                        </div>
                        <div className="user-info">
                            <CalendarTodayIcon className="user-show-icon" />
                            <span className="user-show-user-info">25th March 1987</span>
                        </div>
                        <div className="user-info">
                            <PhoneAndroidIcon className="user-show-icon" />
                            <span className="user-show-user-info">+1 893 243 2488</span>
                        </div>
                        <div className="user-info">
                            <MailOutlineIcon className="user-show-icon" />
                            <span className="user-show-user-info">wells@starlabs.com</span>
                        </div>
                        <div className="user-info">
                            <LocationOnIcon className="user-show-icon" />
                            <span className="user-show-user-info">Star Labs, Central Park, New York, USA</span>
                        </div>
                    </div>
                </div>
                <div className="user-update">
                    <div className="title">Edit</div>
                    <form className="user-update-form">
                        <div className="form-left">
                            <div className="update-item">
                                <label>Username</label>
                                <input type="text"
                                  placeholder="hr_wells"
                                  className="update-input" 
                                />
                            </div>
                            <div className="update-item">
                                <label>Full name</label>
                                <input type="text"
                                  placeholder="Harrisson Wells"
                                  className="update-input" 
                                />
                            </div>
                            <div className="update-item">
                                <label>Email</label>
                                <input type="mail"
                                  placeholder="wells@starlabs.com"
                                  className="update-input" 
                                />
                            </div>
                            <div className="update-item">
                                <label>Phone</label>
                                <input type="text"
                                  placeholder="+1 893 243 2488"
                                  className="update-input" 
                                />
                            </div>
                            <div className="update-item">
                                <label>Address</label>
                                <input type="text"
                                  placeholder="Star Labs, Central Park, New York, USA"
                                  className="update-input" 
                                />
                            </div>
                        </div>
                        <div className="form-right">
                            <div className="update-upload">
                                <img
                                 src="https://thispersondoesnotexist.com/image"
                                 alt="" 
                                 className="user-update-img" 
                                />
                                <label htmlFor="file"><PublishIcon className="img-upload-icon" /></label>
                                <input type="file" id="file" style={{display:'none'}} />
                            </div>
                            <button className="upload-btn">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
