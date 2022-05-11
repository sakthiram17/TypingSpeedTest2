import React, { useState } from "react";
import './TypingForm.css'
import GeneratedText from "../GeneratedText/GeneratedText";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../UI/Container/Container";


const TypingForm = (props)=>{


const style =null;
let typingForm = (
<Container>
<div className="TypingForm">
    
<GeneratedText clength = {props.clength} 
GeneratedText = {props.GeneratedText} length={props.textLength} 
onChange = {props.onChange}
isWrong = {props.isWrong}
wrongText = {props.wrongText}
wrongPos = {props.wrongPos}
toggleHandler = {props.toggle}
></GeneratedText>
<input id="wordsInput" 
disabled = {props.submitted}
style = {style} className="TextArea" onChange={props.onChange}
onKeyDown={props.submit}
></input>

<button><FontAwesomeIcon icon = {faRefresh} onClick = {props.onClick}></FontAwesomeIcon></button>

</div>
<div className="Timer">{props.time}</div>
</Container>
)

return typingForm 

}
export default TypingForm;