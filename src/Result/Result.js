import React, { useEffect, useState } from "react";
import Victory, { VictoryChart } from "victory";
import { VictoryLine } from "victory";
import { VictoryTheme } from "victory";
import { VictoryAxis } from "victory";
import { VictoryLabel } from "victory";
import Container from "../UI/Container/Container";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
const lineWidth = 3;
const Result = (props) => {
  let ResultGraph = null;
  const [points,setPoints] = useState([]);
  let tempPoint = [{
    x: 3,
    y: 5,
  }]
  let t1 = [];
  let t2 = [];
  useEffect(()=>{
    for (let i = 0; i < props.points.length; i++) {
      tempPoint = {
        x: props.points[i][0],
        y: props.points[i][1],
      };
      let temp = [...points]
      temp.push(tempPoint)
      setPoints(temp)
      t1.push(props.points[i][0]);
      t2.push(props.points[i][1]);
    }


  },[props.points])

  return (
    <div className="Result">
      
      <ResponsiveContainer width="80%" height={400}>
        <LineChart
          width={1000}
          height={300}

          data={points.map((ele) => {
            return {
              name: ele.x,
              current: ele.y,
            };
          })}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
          />
          <YAxis unit="WPM" domain={[0, 200]} />
          <Tooltip
 
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#8763ff"
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
