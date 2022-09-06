
// hooks(functions) - useState, useEffect

import React,{ useEffect } from "react"

function UseEffectDemo(){


    const[value,setValue]=React.useState(0)

    // 1st way: only callback function as parameter
    // infinite loop

    useEffect(()=>{
        console.log('Hellooooo');
        console.log("Value is: "+value);
    })

    //2nd way: two parameters a) Callback function, 
               // b) dependency array -empty
               // only once
    // useEffect(()=>{
    //     console.log("Hiiiiiiii");
    //     console.log("Value is: "+value);
    // },[])


    //3rd way: two parameters a) Callback function,
            // b) dependency array with some values
            // 

            
     useEffect(()=>{
        console.log("Hello React!!!");
        console.log("Value is: "+value);
    },[value])

    const display=()=>{
        setValue(value+1)
    }

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <p>This is a paragraph</p>
            <button type="button" onClick={display}>Add</button>
            <p>Value is: {value}</p>
        </div>
    )
}
export default UseEffectDemo
