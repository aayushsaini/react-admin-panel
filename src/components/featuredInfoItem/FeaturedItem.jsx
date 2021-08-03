import React from 'react';
import "./featuredItem.scss";
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';

const FeaturedItem = (props) => {

    const [title, amount, rate] = [props.title, props.amt, Number(props.rate)];

    return (
        <div className="featured-item">
            <span className="featured-title">{title}</span>
            <div className="featured-money-container">
                <span className="featured-money">${amount}</span>
                <span className="featured-money-rate">
                    { rate > 0? 
                        (
                            <span style={{color:"rgb(9, 145, 5)"}}>+{rate} <ArrowUpwardOutlinedIcon className="rate-icon" /> </span>
                        ):
                        (
                            <span style={{color:"rgb(194, 24, 24)"}}>{rate} <ArrowDownwardOutlinedIcon className="rate-icon" /> </span>
                        )
                    }
                </span>
            </div>
            <div className="featured-meta">Compared to last month</div>
        </div>
    )
}

export default FeaturedItem