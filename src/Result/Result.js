import React, { useState } from "react";
import Victory, { VictoryChart } from "victory";
import { VictoryLine } from "victory";
import { VictoryTheme } from "victory";
import { VictoryAxis } from "victory";
import { VictoryLabel } from "victory";
import Container from "../UI/Container/Container";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Result.css"
const Result = (props)=>{
    let ResultGraph = null;
  let pointsList = []
    let tempPoint = {
        x:3,
        y:5
    }
let t1 = []
let t2 = []
    for(let i = 0;i<props.points.length;i++)
    {
   tempPoint = {
       x:props.points[i][0],
       y:props.points[i][1]
   }
   pointsList.push(tempPoint)
 t1.push(props.points[i][0]);
 t2.push(props.points[i][1]);
    }

  
   
    return(
      <div className="Result">
        
        <Container>
        Speed in WPM
         
        <VictoryChart 
       responsive={false}
       labels = "Wpm"
       height = {300} width = {400}
       theme={VictoryTheme.material}>
       
    <VictoryLine
          style={{
            data: { stroke: "#00d5ff" 
          },
            parent: { border: "1px solid #ccc"}
          }}
    
          size = {2}
          data={pointsList}
        />
      </VictoryChart>
      </Container>
      <button className="ReloadButton"><FontAwesomeIcon icon = {faRefresh} onClick = {props.onClick}></FontAwesomeIcon></button>
      </div>
    )
}
export default Result;