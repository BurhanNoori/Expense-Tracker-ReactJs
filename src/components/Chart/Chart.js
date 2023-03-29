import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = props => { 
    const datapointValues = props.datapoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...datapointValues);
    return <div className="chart">
        {props.datapoints.map(datapoint => <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label} />)}

    </div>
}

export default Chart;

