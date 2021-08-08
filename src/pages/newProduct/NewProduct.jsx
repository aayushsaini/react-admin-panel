import React from 'react';
import "./newProduct.scss";

const NewProduct = () => {
    return (
        <div className="new-user">
            <h1 className="title">New User</h1>
            <form className="new-user-form">
                <div className="entry-field">
                    <label>Full Name</label>
                    <input type="text" placeholder="Full name.." />
                </div>
                <div className="entry-field">
                    <label>Username</label>
                    <input type="text" placeholder="Username.." />
                </div>
                <div className="entry-field">
                    <label>Email</label>
                    <input type="email" placeholder="User Email.." />
                </div>
                <div className="entry-field">
                    <label>Password</label>
                    <input type="password" placeholder="password.." />
                </div>
                <div className="entry-field">
                    <label>Phone</label>
                    <input type="text" placeholder="e.g. +1 142 544 654" />
                </div>
                <div className="entry-field">
                    <label>Address</label>
                    <input type="text" placeholder="User address.." />
                </div>
                <div className="entry-field">
                    <label>Gender</label>
                    <div className="gender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="male">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="male">Other</label>
                    </div>
                </div>
                <div className="entry-field">
                    <label>Active</label>
                    <select className="new-user-select" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="add-user">Add User</button>
            </form>
        </div>
    )
}

export default NewProduct
