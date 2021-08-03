import React from 'react';
import "./home.scss";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from "../../data/userData"; //chart data
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart title="Users Analytics" data={userData} datakey="Active Users" grid={true} />
            <div className="home-widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
