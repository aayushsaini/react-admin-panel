import React from 'react';
import "./home.scss";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
//import data for chart
import {userData} from "../../data/userData";

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="Users Analytics" data={userData} datakey="Active Users" grid={true} />
            <div className="home-widgets"></div>
        </div>
    )
}

export default Home
