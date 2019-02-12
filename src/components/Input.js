import React, { useState } from 'react';

function Input(props){
    let [text, changeText] = useState("")
    return <input onChange={e => changeText(e.target.value)}className="input" placeholder={props.placeholder || ""} value={text} ></input>
}


export default Input;