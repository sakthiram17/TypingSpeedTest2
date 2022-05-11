import React from "react";
import Container from "../../UI/Container/Container";
import RectangularBar from "../../UI/RectangularBar/RectangularBar";
import Card from "../../UI/Card/Card";
import Result from "../../Result/Result";
const SpeedTrackers = (props)=>{
     
    return(
        <Container>
               <Card
       text = {["WPM","Accuracy","GWPM"]}
       value = {[props.wpm||0,props.accuracy||0,props.gwpm||0]}
       header = "Speed Stats"
       
       ></Card>
<RectangularBar
      height = "250px"
      width = "80px"
      c1 = "#fca311"
      c2 = "whitesmoke"
      direction = "top"
      level = {props.completion||10}
      text = "Completion"
      >

      </RectangularBar>
      <RectangularBar
      height = "250px"
      width = "80px"
      c1 = "#00bfff"
      c2 = "whitesmoke"
      direction = "top"
      level = {(props.wpm/150)*100||10}
      text = "WPM"
      >

      </RectangularBar>

        </Container>
    )
}
export default SpeedTrackers
