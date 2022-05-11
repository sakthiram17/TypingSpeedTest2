import React ,{useState,useEffect} from "react";
import TypingForm from "../TypingForm/TypingForm";
import random_words_str from "../GeneratedText/RandomWordsList";
import SpeedTrackers from "../Stats/SpeedTrackers/SpeedTrackers";
import Result from "../Result/Result";
import "./Speedtest.css"
let startTime = new Date();

let Clock = null;
let firstKeyPress = true;
let speedTrackedList = [];
let t = 0;
let typingform = null;

const reloadState = ()=>{
    
    window.location.reload();
    }
const SpeedTest = (props)=>{

    const [time,setTime] = useState(t);
    let words_gen = "";
    let Acc = 0;
    let additionalContent = null;
    let showResult =false;
    const [submitForm ,setSubmitForm] = useState(false);
    const [totalKeyStrokes,setKeyStrokes] = useState(0);
    let random_words = random_words_str.split("\n");
    const [text,setText] = useState(" ");
    const [clength,setClength] = useState(0);
    const [isWrong,setWrong] = useState(false);
    const [wpm,setWpm] = useState(0);
    const [wrongPos,setWrongPos] = useState(0);
    const [WrongText,setWrongText]  = useState("");
    let result = null;
    let maxlength = 0;

    const isPrsent =(array,ele)=>{
    for(let i = 0;i<array.length;i++)
    {
        if(array[i][0]==ele)
        return true
    }
    return false
    }
    const generateText = ()=>{
        words_gen = ""

        for(let i = 0;i<props.length;i++) 
        {
            let temp = Math.floor(Math.random() * 2999);
            words_gen = words_gen+" "+random_words[temp];   
        }
        maxlength = words_gen.length;
        setText(words_gen);

        }
    useEffect(()=>{
            generateText();
        },[]);
    useEffect(()=>{
            generateText();
        },[props.length]);
    useEffect(()=>{

    },
    [])
    const submitHandler = (event)=>{
        console.log("Submit handler running")
        if(event.key =='Enter')
        {   
            clearInterval(Clock);
            setSubmitForm(true);
        }
    }
    const onTypingHandler=(event)=>{
        const TypedString = event.target.value;
        let is_wrong = false;
        let l = 0;
        setKeyStrokes(totalKeyStrokes+1);
        if(firstKeyPress)
        {
            Clock = setInterval(()=>{
            setTime((time)=>time +1)
            t++;
        },1000)
        firstKeyPress = false;
        }
        if(TypedString===text.substring(1))
        {
            setSubmitForm(true)
            clearInterval(Clock);
            showResult = true;
            setWpm(TypedString.length/time);
        }



        for(let i = 0;i<TypedString.length;i++)
        {
            if(TypedString[i]==text[i+1])
            {
            l++;
            }else{
            
                is_wrong = true;
                setWrongPos(i)
                setWrongText(TypedString.substring(i))
                
            break;
        
            }

        }
        setWpm((l/time)*60/5);
        if(isFinite(wpm))
        {
            if(!isPrsent(speedTrackedList,time))
            {speedTrackedList.push([time,wpm])
        }

        }
    
        setWrong(is_wrong)
        setClength(l)
    }
    typingform = <TypingForm clength = {clength}GeneratedText = {text} 
    onChange = {onTypingHandler}
    isWrong = {isWrong}
    wrongPos = {wrongPos}
    wrongText = {WrongText}
    textLength = {props.length}
    submitted = {submitForm}
    time = {time}
    submit = {submitHandler}
    onClick = {reloadState}
    ></TypingForm>
    if(submitForm)
    {
        result = <Result 
        onClick = {reloadState}
        points = {speedTrackedList}
        ></Result>
        typingform = null;
    }
        return(
            <div>
                
                <SpeedTrackers accuracy = {((clength/totalKeyStrokes)*100)
                ?((clength/totalKeyStrokes)*100).toFixed(2)
                :0} 
                wpm = {((clength + WrongText.length||0)/time)*60/5?
                (((clength + WrongText.length||0)/time)*60/5).toFixed(2):0}
                gwpm = {wpm?wpm.toFixed(2):null}
                completion = {(clength/text.length)*100}
                points = {speedTrackedList}
                ></SpeedTrackers>
            {typingform}
            {result}
                
                
            </div>
        )
}
export default SpeedTest;