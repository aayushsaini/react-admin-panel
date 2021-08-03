import React from 'react';
import UserProfileWidget from '../widgetSmUserProfile/UserProfileWidget';
import "./widgetSm.scss";

const WidgetSm = () => {
    return (
        <div className="widget-sm">
            <div className="widget-title">New Members</div>
            <ul className="widget-sm-list">
                <li>
                    <UserProfileWidget 
                     userAvatarSrc="https://generated.photos/vue-static/home/hero/4.png"
                     userName="Samantha Williams"
                     userPos="Security Head" 
                    />
                </li>
                <li>
                    <UserProfileWidget 
                     userAvatarSrc="https://generated.photos/vue-static/home/hero/3.png"
                     userName="Jeff Thawne"
                     userPos="IT Ops" 
                    />
                </li>
                <li>
                    <UserProfileWidget 
                     userAvatarSrc="https://generated.photos/vue-static/home/hero/2.png"
                     userName="Eobard Thawne"
                     userPos="Engineering Head" 
                    />
                </li>
                <li>
                    <UserProfileWidget 
                     userAvatarSrc="https://generated.photos/vue-static/home/hero/1.png"
                     userName="Harrison Wells"
                     userPos="Scientist" 
                    />
                </li>
                <li>
                    <UserProfileWidget 
                     userAvatarSrc="https://generated.photos/vue-static/home/hero/5.png"
                     userName="Cisco Ramon"
                     userPos="Intern" 
                    />
                </li>
                <li>
                    <UserProfileWidget 
                     userAvatarSrc="https://generated.photos/vue-static/home/hero/1.png"
                     userName="Harrison Wells"
                     userPos="Scientist" 
                    />
                </li>
                <li>
                    <UserProfileWidget 
                     userAvatarSrc="https://generated.photos/vue-static/home/hero/5.png"
                     userName="Cisco Ramon"
                     userPos="Intern" 
                    />
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
