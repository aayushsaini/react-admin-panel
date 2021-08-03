import React from 'react';
import UserComponentWLg from '../widgetLgUserComponent/UserComponentW-Lg';
import "./widgetLg.scss";

const WidgetLg = () => {
    return (
        <div className="widget-lg">
            <div className="widget-title">Latest transactions</div>
            <table className="wdgt-table">
                <tr className="wdgt-tr-1">
                    <th className="wdgt-th">Customer</th>
                    <th className="wdgt-th">Date</th>
                    <th className="wdgt-th">Amount</th>
                    <th className="wdgt-th">Status</th>
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/6.png"
                     name="David Iguel" 
                     date="Aug 4, 2021"
                     amt="$4200"
                     status="Approved"
                    />
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/8.png"
                     name="Harrison Wells" 
                     date="Feb 25, 2021"
                     amt="$1540"
                     status="Approved"
                    />
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/3.png"
                     name="Barry Allen" 
                     date="Jul 24, 2021"
                     amt="$3000"
                     status="Pending"
                    />
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/4.png"
                     name="Caitlin Snow" 
                     date="Aug 1, 2021"
                     amt="$5500"
                     status="Pending"
                    />
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/5.png"
                     name="Iris West" 
                     date="Aug 2, 2021"
                     amt="$2800"
                     status="Approved"
                    />
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/1.png"
                     name="Joe West" 
                     date="Dec 29, 2020"
                     amt="$1200"
                     status="Declined"
                    />
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/2.png"
                     name="Julian Schiller" 
                     date="June 29, 2022"
                     amt="$9200"
                     status="Approved"
                    />
                </tr>
                <tr className="wdgt-tr">
                    <UserComponentWLg 
                     avatar="https://generated.photos/vue-static/home/hero/4.png"
                     name="Jesse Quick" 
                     date="Aug 1, 2020"
                     amt="$1200"
                     status="Declined"
                    />
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
