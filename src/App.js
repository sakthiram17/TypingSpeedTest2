import logo from './logo.svg';
import './App.css';
import Navbar from './UI/Navbar/Navbar';
import SpeedTest from './SpeedTest/SpeedTest';
import Card from './UI/Card/Card';
import { useState } from 'react';
import Modal from './UI/Modal/Modal';
const navList = [];
function App() {
  const [textLength,changeLength] = useState(50);
  const onLengthChangeHandler = (value)=>{
    changeLength(value)
  
       }


  return (
    <div className="App">
      <Navbar list= {navList} first = {"Typing"}
      last = "SpeedTest" 
      textLength = {textLength}
      clicked = {onLengthChangeHandler}
      
      
      ></Navbar>
      <SpeedTest length={textLength}></SpeedTest>
     <Modal isLoading></Modal>
    </div>
  );
}

export default App;
