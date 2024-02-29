import React, { useState } from "react";
import "./TypingForm.css";
import GeneratedText from "../GeneratedText/GeneratedText";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../UI/Container/Container";

const TypingForm = (props) => {
  const style = null;
  const handlePaste = (event) => {
    // Prevent default behavior to disable paste
    event.preventDefault();
    
    // You can add your custom logic here if needed
    // For example, prevent pasting into a textarea
  }


  let typingForm = (
      <div className="typing-container">
      <div className="Timer">{props.time}</div>
      <div className="TypingForm">
        <GeneratedText
          clength={props.clength}
          GeneratedText={props.GeneratedText}
          length={props.textLength}
          onChange={props.onChange}
          isWrong={props.isWrong}
          wrongText={props.wrongText}
          wrongPos={props.wrongPos}
          toggleHandler={props.toggle}
        ></GeneratedText>
        <input
          id="wordsInput"
          disabled={props.submitted}
          style={style}
          className="TextArea"
          autoComplete="off"
          onChange={props.onChange}
          onKeyDown={props.submit}
          onCopy="return false" onCut="return false" onPaste={handlePaste}
        ></input>
        <div>
        <button style={{
            outline :'none',
            border :'none'

        }}>
          <FontAwesomeIcon
            icon={faRefresh}
            onClick={props.onClick}
            style ={{
                color:'var(--accent-color)',
                backgroundColor:'transparent'
            }}
          ></FontAwesomeIcon>
        </button>
        </div>
      </div>

      </div>
  );

  return typingForm;
};
export default TypingForm;
