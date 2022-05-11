import React from "react";
import "./wordsToggle.css"
const WordsToggle =(props)=>
{
    
let wordList = props.list;
let toggleList = [];
for(var i = 0;i<wordList.length;i++)
{  let t = props.list[i];
    if(props.length==props.list[i])
    {
        toggleList.push(<li key={t}onClick ={()=>{props.clicked(t)}} className="ToggleElement Active">{props.list[i]}</li>)
    }
    else{
    toggleList.push(<li key = {t} onClick = {()=>{props.clicked(t)}} className="ToggleElement">{props.list[i]}</li>)
    }
}

return(
    <div className="WordsToggler">
    <ul>
    {toggleList}
    </ul>
    </div>
)


}

export default WordsToggle;