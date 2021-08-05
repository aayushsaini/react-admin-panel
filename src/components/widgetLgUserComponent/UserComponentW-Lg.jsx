import React from 'react';
import "./usercomponent.scss";

const UserComponentWLg = (props) => {    
    
    const Button = ({type}) => {
        return (<button className={"user-status-btn "+type}>{type}</button>)
    };

    const [avatar, userName, date, amt, status] = [props.avatar, props.name, props.date, props.amt, props.status];

    return (
        <>
            <td className="user-td">
                <img src={avatar} alt="" className="user-img" />
                <span className="userName">{userName}</span>
            </td>
            <td className="user-date">{date}</td>
            <td className="user-amt">{amt}</td>
            <td className="user-status"><Button type={status} />
            </td>
        </>
    )
}

export default UserComponentWLg