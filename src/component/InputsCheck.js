import React from "react";
function InputsCheck(){

    const userObj={
        firstName:'',
        lastName:'',
        city:''
    }

    const[user,setUser]=React.useState(userObj)

    const[userData,setUserData]=React.useState({})

    const handleInput=(event)=>{

      //  setText(event.target.value)
        console.log(event.target);
        setUser({...user,[event.target.name]:event.target.value})
    }

    const showData=()=>{
        console.log(user);
        setUserData({...user})
    }

    return(
        <div>
            <h1>Registration Form</h1>
            <form>
                <label>FirstName : </label>
                <input type='text' 
                        name="firstName" 
                        onChange={handleInput}/>

                <label>LastName : </label>
                <input type='text' 
                        name="lastName" 
                        onChange={handleInput}/>  

                <label>City : </label>
                <input type='text' 
                        name="city" 
                        onChange={handleInput}/>

                <button type='button' 
                        onClick={showData}>Submit</button>              
            </form>

         <DisplayData data={userData}/>            
        </div>
    )
}

function DisplayData({data}){

    return(
        <div>
                <p>FirstName : {data.firstName}</p>
                <p>LastName : {data.lastName}</p>
                <p>City : {data.city}</p>
        </div>
    )
}

export default InputsCheck