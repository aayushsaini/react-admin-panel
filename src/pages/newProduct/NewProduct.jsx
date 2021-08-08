import React from 'react';
import "./newProduct.scss";

const NewProduct = () => {
    return (
        <div className="new-user">
            <h1 className="title">New Product</h1>
            <form className="new-user-form">
                <div className="entry-field">
                    <label>Product Name</label>
                    <input type="text" placeholder="Full name.." />
                </div>
                <div className="entry-field">
                    <label>Company</label>
                    <input type="text" placeholder="Username.." />
                </div>
                <div className="entry-field">
                    <label>Mfg. Date</label>
                    <input type="date" placeholder="User Email.." />
                </div>
                <div className="entry-field">
                    <label>Max Retail Price</label>
                    <input type="text" placeholder="Max Retail Price.." />
                </div>
                <div className="entry-field">
                    <label>Discount</label>
                    <input type="text" placeholder="e.g. 5% Discount" />
                </div>
                <div className="entry-field">
                    <label>Company Address</label>
                    <input type="text" placeholder="Company address.." />
                </div>
                <div className="entry-field">
                    <label>Availability</label>
                    <div className="stock">
                        <input type="radio" name="stock" id="available" value="available" />
                        <label htmlFor="available">In Stock</label>
                        <input type="radio" name="stock" id="unavailable" value="unavailable" />
                        <label htmlFor="unavailable">Out of Stock</label>
                    </div>
                </div>
                <div className="entry-field">
                    <label>More Stock Requested</label>
                    <select className="new-product-select" name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="add-product">Add Product</button>
            </form>
        </div>
    )
}

export default NewProduct
