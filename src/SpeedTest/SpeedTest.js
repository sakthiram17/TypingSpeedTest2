import React, { useState, useEffect } from "react";
import TypingForm from "../TypingForm/TypingForm";
import random_words_str from "../GeneratedText/RandomWordsList";
import SpeedTrackers from "../Stats/SpeedTrackers/SpeedTrackers";
import Result from "../Result/Result";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Speedtest.css";
let startTime = new Date();

let Clock = null;
let firstKeyPress = true;
let speedTrackedList = [];
let t = 0;
let typingform = null;

const reloadState = () => {
  window.location.reload();
};
const SpeedTest = (props) => {
  const [time, setTime] = useState(t);
  let words_gen = "";

  let showResult = false;
  const [submitForm, setSubmitForm] = useState(false);
  const [totalKeyStrokes, setKeyStrokes] = useState(0);
  let random_words = random_words_str.split("\n");
  const [text, setText] = useState(" ");
  const [clength, setClength] = useState(0);
  const [isWrong, setWrong] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [wrongPos, setWrongPos] = useState(0);
  const [WrongText, setWrongText] = useState("");
  const [totalPoints ,setTotalPoints ] = useState([]);

  let result = null;
  let maxlength = 0;

  const isPresent = (array, ele) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].time == ele) return true;
    }
    return false;
  };
  const generateText = () => {
    words_gen = "";

    for (let i = 0; i < props.length; i++) {
      let temp = Math.floor(Math.random() * 2999);
      words_gen = words_gen + " " + random_words[temp];
    }
    maxlength = words_gen.length;
    setText(words_gen);
  };
  useEffect(() => {
    generateText();
  }, []);
  useEffect(() => {
    setWpm(0);
    setClength(0);
    setTime(0);
    generateText();
  }, [props.length]);
  useEffect(() => {}, []);
  const submitHandler = (event) => {
    if (event.key == "Enter") {
      clearInterval(Clock);
      setSubmitForm(true);
    }
  };
  const onTypingHandler = (event) => {
    const TypedString = event.target.value;
    let is_wrong = false;
    let l = 0;
    setKeyStrokes(totalKeyStrokes + 1);
    if (firstKeyPress) {
      Clock = setInterval(() => {
        setTime((time) => time + 1);
        t++;
      }, 1000);
      firstKeyPress = false;
    }
    if (TypedString === text.substring(1)) {
      setSubmitForm(true);
      clearInterval(Clock);
      showResult = true;
      setWpm(TypedString.length / time);
    }

    for (let i = 0; i < TypedString.length; i++) {
      if (TypedString[i] == text[i + 1]) {
        l++;
      } else {
        is_wrong = true;
        setWrongPos(i);
        setWrongText(TypedString.substring(i));

        break;
      }
    }
    setWpm(((l / time) * 60) / 5);
    if (isFinite(wpm)) {
      if (!isPresent(totalPoints, time)) {
        let prev = [...totalPoints]
        prev.push({time : time,gwpm:wpm,accuracy:   (clength / totalKeyStrokes) * 100
        ? ((clength / totalKeyStrokes) * 100).toFixed(2)
        : 100,
        wpm:(((clength + WrongText.length || 0) / time) * 60) / 5
        ? ((((clength + WrongText.length || 0) / time) * 60) / 5).toFixed(2)
        : 0
      })
        setTotalPoints(prev)

        
        
      }
    }

    setWrong(is_wrong);
    setClength(l);
  };
  typingform = (
    <TypingForm
      clength={clength}
      GeneratedText={text}
      onChange={onTypingHandler}
      isWrong={isWrong}
      wrongPos={wrongPos}
      wrongText={WrongText}
      textLength={props.length}
      submitted={submitForm}
      time={time}
      submit={submitHandler}
      onClick={reloadState}
    ></TypingForm>
  );


    

  return (
    <div className="main-container">
      <SpeedTrackers
        accuracy={
          (clength / totalKeyStrokes) * 100
            ? ((clength / totalKeyStrokes) * 100).toFixed(2)
            : 100
        }
        wpm={
          (((clength + WrongText.length || 0) / time) * 60) / 5
            ? ((((clength + WrongText.length || 0) / time) * 60) / 5).toFixed(2)
            : 0
        }
        gwpm={wpm ? wpm.toFixed(2) : null}
        completion={(clength / text.length) * 100}
        points={totalPoints}
      ></SpeedTrackers>
          <button  className = 'ReloadButton'>
              <FontAwesomeIcon
                icon={faRefresh}
                onClick={props.onClick}
                style ={{
                    color:'var(--accent-color)',
                    backgroundColor:'transparent'
                }}
              ></FontAwesomeIcon>
            </button>
      {typingform}

      <Result onClick={reloadState} points={totalPoints}></Result>;
    </div>
  );
};
export default SpeedTest;
