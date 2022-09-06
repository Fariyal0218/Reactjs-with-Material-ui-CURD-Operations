import React  from "react"

function HandleInput(){

    const[text,setText]=React.useState('')
    
    const[message,setMessage]=React.useState('')

    const handleText=(event)=>{
        setText(event.target.value)
    }

    const display=()=>{
        setMessage(text)
        document.getElementById("myform").reset() 
    }

    return(

        <div>

            <h1>State Change</h1>

            <form id="myform">

            <input type='text' onChange={handleText}/>

            <button type="button" onClick={display}>Display</button>
            
            </form>  

            <p> Text : {message}</p>

        </div>
    )
}

export default HandleInput