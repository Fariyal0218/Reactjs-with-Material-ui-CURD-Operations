import React,{useState} from "react"


function CallBackEvent(){

    const[text,setText]=useState('')

    const handleChange=(value)=>{

        setText(value)

    }

    return(
        <div>
            <h1>CallBack Event</h1>
            <p>Text : {text}</p>
            <CheckCallBack onInputChange={handleChange}/>
        </div>
    )
}

function CheckCallBack({onInputChange}){

    const[val,setVal]=React.useState()
    
    const handleInput=(event)=>{
        setVal(event.target.value)
    }

    const passValue=()=>{

        onInputChange(val)

    }

    return(
        <div>
            <input type='text' onChange={handleInput}/>
            <button type="button" onClick={passValue}>Send</button>
        </div>
    )
}

export default CallBackEvent
