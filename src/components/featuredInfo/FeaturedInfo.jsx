import React from 'react';
import "./featuredInfo.scss";
import FeaturedItem from '../featuredInfoItem/FeaturedItem';

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <FeaturedItem title="Revenue" amt="4570" rate="+9.22" />
            <FeaturedItem title="Sales" amt="8210" rate="-2.1" />
            <FeaturedItem title="Profit" amt="2800" rate="+1.4" />
        </div>
    )
}

export default FeaturedInfo