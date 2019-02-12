import React, { useState } from 'react';

function Input(props){
    const {onSubmit = ()=>{}, placeholder =""} = props;
    let [text, changeText] = useState("")
    function submitHandler(evt){
        evt.preventDefault()
        onSubmit(text)
        changeText("")     
    }
    return <form onSubmit={submitHandler}>
    <input onChange={e => changeText(e.target.value)} className="input" placeholder={placeholder || ""} value={text} ></input>
    </form>
}


export default Input;