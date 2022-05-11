import React from "react";
import "./Card.css"
const Card = (props)=>{

let dispCard = null;
let newEleList = [];
for(let i = 0;i<props.text.length;i++)
{
newEleList.push(<div key ={i+1}className="CardElement">{props.text[i]} : {props.value[i]}</div>)
}
return(
    <div className="Card">
    <div className="CardHeader">
    {props.header}
    </div>
    {newEleList}
    </div>
)

}
export default Card;