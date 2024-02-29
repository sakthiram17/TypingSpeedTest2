import React from "react";
import Container from "../../UI/Container/Container";
import RectangularBar from "../../UI/RectangularBar/RectangularBar";
import Card from "../../UI/Card/Card";
import Result from "../../Result/Result";
import Guage from "../../UI/Guage";
const SpeedTrackers = (props)=>{
     
    return(
        <Container>
               <Card
       text = {["WPM","Accuracy","GWPM"]}
       value = {[props.wpm||0,props.accuracy||0,props.gwpm||0]}
       header = "Speed Stats"
       
       ></Card>

      <Guage 
      value = {parseInt(props.wpm)}
      max = {200}
      unit = " WPM"
      >

      </Guage>
      <Guage 
      value = {parseFloat(props.completion).toFixed(2) ||0}
      max = {200}
      unit = " %"
      type
      >

      </Guage>
        </Container>
    )
}
export default SpeedTrackers
