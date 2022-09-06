// github repository code for validation (class) 
import React from "react"

function MyFormValidate(){

    const errorObj={
        fullName:'',
        email:'',
        password:''
    }
    
    const[fullName,setFullName]=React.useState('')

    const[email,setEmail]=React.useState('')

    const[password,setPassword]=React.useState()

    const[errors,setErrors]=React.useState(errorObj)


    const sendData =(event)=>{
        event.preventDefault()
    }

    const validateInput=(event)=>{
    
    event.preventDefault()

        

          const name=event.target.name
           const value=event.target.value

       

          let checkError

          switch(name){

              case 'fullName':
                    checkError= value.length < 6 ? 'Invalid FullName':''
                    console.log(checkError);
                    break;

              case 'email':
                    checkError= value.length < 6 ? 'Invalid Email':''
                    console.log(checkError);
                    break;
                    
              case 'password':
                    checkError=value.length <6 ? 'Invalid Password':''
                    console.log(checkError);
                    break;
                    
              default:
                  break;      
          }
    }

    return(
        <div>

            <form onSubmit={sendData}>
                <div>
                    <label> Full Name : </label>
                    <input type='text' name='fullName' onChange={validateInput}/>
                    { errors.fullName.length > 0}
                </div>
                <br/>

                <div>
                    <label> Email : </label>
                    <input type='email' name='email' onChange={validateInput}/>
                    { errors.email.length > 0 }
                </div>
                <br/>

                <div>
                    <label> Password : </label>
                    <input type='password' name='password' onChange={validateInput}/>
                    { errors.password.length > 0}
                </div>
                <br/>

                <div>
                <input type='submit' value='Submit'/>
                </div>
                
            </form>
        </div>
    )
     
}
export default MyFormValidate