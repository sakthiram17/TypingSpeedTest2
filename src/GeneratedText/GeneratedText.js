import React from "react";
import { useState } from "react";
import './GeneratedText.css'
import random_words_str from "./RandomWordsList";
const GeneratedText = (props)=>{
let words_gen = "";
//const [finalWordsList ,setWordList] = useState(null);
const random_words = props.GeneratedText;
let newWordsList = [];
let newLettersList = [];
let cummilativeLength = 0;
words_gen = ""; 
if(props.isWrong)
{ 

  
    for(let i = 0;i<random_words.length;i++)
    {
        newLettersList = [];
        for(let j = 0;j<random_words[i].length;j++)
        {
            let classlist = ["Letter",props.clength<=cummilativeLength?"Completed":""].join(' ');
            const style = props.clength>=cummilativeLength?{color:"green"}:null
            newLettersList.push(<span key = {cummilativeLength} className="Letter Completed" style = {style}>{random_words[i][j]}</span>)
            
            if(cummilativeLength==props.wrongPos+1)
            {
        
                newWordsList.push(<span key = {cummilativeLength} className="Wrong" style ={{color:"red"}}>{props.wrongText}</span>)
            }
            cummilativeLength++;
            }
            
            
            newWordsList.push(<span key ={cummilativeLength + "w"} className="word">{newLettersList}</span>)
        }

}
else{
    for(let i = 0;i<random_words.length;i++)
    {
        newLettersList = [];
        for(let j = 0;j<random_words[i].length;j++)
        {
            let classlist = ["Letter",props.clength<=cummilativeLength?"Completed":""].join(' ');
            const style = props.clength>=cummilativeLength?{color:"green"}:null
            newLettersList.push(<span key = {cummilativeLength} className="Letter-Completed" style = {style}>{random_words[i][j]}</span>)
            cummilativeLength++;

        }

        newWordsList.push(<span key = {cummilativeLength+"w"} className="word">{newLettersList}</span>)

    }
}
//setWordList(newWordsList)
 


return(
    <div className="GeneratedTextBox">
    {newWordsList}
    </div>
)



}
export default GeneratedText;