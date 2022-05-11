import React from 'react'
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'
import WordsToggle from '../wordsToggle/wordsToggle';
const Navbar = (props)=>{
let navElementList = props.list;
let header = props.header;
let navList = [];
for(var i = 0;i<props.list.length;i++)
{
navList.push(<li key = {props.list[i]} className='NavbarElement'>{props.list[i]}</li>)
}

const wordList = [25,50,100,150,200];
const nav = (
    <div className='NavBar'>
    
    <ul>
    <li className='header'>{props.header}</li>
    {navList}
    </ul>
    <WordsToggle list ={wordList}
    length = {props.textLength}
    clicked = {props.clicked}
    ></WordsToggle> 
    </div>
);
return nav;


}
export default Navbar