import React from 'react';
import "./product.scss";
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productStat } from "../../data/productStat";
import Publish from '@material-ui/icons/Publish';

const Product = () => {
    return (
        <div className="product">
            <div className="product-title-container">
                <h1 className="title">Product</h1>
                <Link to="/createProduct">
                    <button className="add-product-btn">Create</button>
                </Link>
            </div>
            <div className="product-top">
                <div className="left">
                    <Chart data={productStat} datakey="Sales" title="Sales Performance" />
                </div>
                <div className="right">
                    <div className="right-top">
                        <img 
                         src="https://cdn.shoplightspeed.com/shops/631940/files/34858231/800x600x3/apple-macbook-air-13-retina-16ghz-i5-8gb-256gb-201.jpg" 
                         alt="" />
                         <span className="name">Apple M1 Macbook</span>
                    </div>
                    <div className="right-bottom">
                        <ul className="info-sec">
                            <li><div className="info">Brand:</div><div className="info">Apple Inc.</div></li>
                            <li><div className="info">Launch Date:</div><div className="info">18th September, 2020</div></li>
                            <li><div className="info">Product Id:</div><div className="info">235-fe-2981</div></li>
                            <li><div className="info">In-stock:</div><div className="info"><b>Yes</b></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-bottom">
                <form className="product-form">
                    <div className="left">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple M1 Macbook" />
                        <label>In Stock?</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Discount?</label>
                        <select name="discount" id="discount">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="right">
                        <div className="upload">
                            <img 
                             src="https://cdn.shoplightspeed.com/shops/631940/files/34858231/800x600x3/apple-macbook-air-13-retina-16ghz-i5-8gb-256gb-201.jpg" 
                             alt="" 
                            />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display:'none'}} />
                        </div>
                        <button>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
