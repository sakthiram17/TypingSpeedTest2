import React, { useEffect, useState } from "react";

import "./Result.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

const toolTipStyle = {
  backgroundColor: "rgba(0, 190, 237,0.5)",
  color: "white",
  backdropFilter: "blur(4px)",
  border: "none",
  borderRadius: "1rem",
  fontWeight: "bold",
  padding: "0.5rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
};
function formatTimeUnits(value) {

    return value + "s";


}
const CustomTooltip = (props) => {
  if (props.active && props.payload && props.payload.length) {
    return (
      <div className="custom-tooltip" style={toolTipStyle}>
        <p> {formatTimeUnits(parseFloat(props.label).toFixed(2))}</p>
        <p>
          {" "}
          {parseFloat(props.payload[0].value).toFixed(2)}
          {props.y}
          
        </p>
        <p>
         Accuracy : {parseFloat(props.payload[1].value).toFixed(2)} %
        </p>
      </div>
    );
  }

  return null;
};
const lineWidth = 1.5;
const Result = (props) => {
  let domainY= 0;
  for(var i = 0;i<props.points.length;i++)
  {
    domainY = props.points[i].wpm>domainY?props.points[i].wpm:domainY;
  }
  console.log(domainY)
  return (
    <div className="Result">
      
      <ResponsiveContainer width={800} height={400}>
        <LineChart
          width={1000}
          height={300}
          
          data={props.points.map((ele) => {
            return {
              name: ele.time,
              wpm:ele.wpm,
              gwpm:ele.gpwm,
              accuracy:ele.accuracy
            };
          })}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
          />
          <YAxis unit="WPM" domain={[0, 200]}   activeDot={{ r: 8 }}/>
          <Tooltip
            content={CustomTooltip}
            y = {"WPM"}
            contentStyle={toolTipStyle}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="wpm"
            stroke="#00beed"
            strokeWidth={lineWidth}
            activeDot={{ r: 8 }}
            dot={false}
          
          />

           <Line
            type="monotone"
            dataKey="accuracy"
            stroke="#87fe6d"
            strokeWidth={lineWidth}
            activeDot={{ r: 8 }}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};
export default Result;
