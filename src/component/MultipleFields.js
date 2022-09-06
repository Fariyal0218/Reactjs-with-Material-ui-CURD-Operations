import React from 'react'

function MultipleFields(){

    // const userObj={
    //     firstName:'',
    //     lastName:'',
    //     city:''
    // }

    const[user,setUser]=React.useState({
        firstName:'',
        lastName:'',
        city:''
    })
    
    const[displayData,setDisplayData]=React.useState({})

    const handleChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    
    // const[firstName,setFirstName]=React.useState('')
    // const[lastName,setLastName]=React.useState('')
    // const[city,setCity]=React.useState('')

    // const handleChange1=(event)=>{
    //     setFirstName(event.target.value)
    // }

    // const handleChange2=(event)=>{
    //     setLastName(event.target.value)
    // }

    // const handleChange3=(event)=>{
    //     setCity(event.target.value)
    // }

    const showData=()=>{
        setDisplayData({...user})
        document.getElementById("myform").reset()
    }

    return(
        <div align="center">
        <form id="myform">

            <label>FirstName : </label>
            <input type="text" name="firstName" 
            onChange={handleChange}/>
            <br/>

            <label>LastName : </label>
            <input type="text" name="lastName" 
            onChange={handleChange}/>   
            <br/>


            <label>City : </label>
            <input type="text" name="city" 
            onChange={handleChange}/>  
            <br/>


            <button type="button" onClick={showData}>Submit</button>  
             <br/>

        </form>
        <div>
            <h2>Form Details</h2>
            <p>FirstName : {displayData.firstName}</p>
            <p>LastName : {displayData.lastName}</p>
            <p>City : {displayData.city}</p>
        </div>
        </div>
    )
}

export default MultipleFields