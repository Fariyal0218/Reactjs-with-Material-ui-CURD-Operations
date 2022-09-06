//login form code, use axios method 

import React from "react"
import axios from "axios"
// import {Link, useNavigate} from 'react-router-dom'


const Login=()=>{

    const loginObj={
        email:'',
        password:''
    }
    //const navigate=useNavigate()

    const [login,setLogin]=React.useState(loginObj);

    const setValue=(event)=>{
        setLogin({...login,[event.target.name]:event.target.value});

    }
    // const checkLogin=()=>{
    //     axios.post('http://localhost:8080/checkLogin,login')
    //     .then(responce=>responce.data)
    //     .then(res=>{
    //         if(res.status===200){
    //             navigate('/')
    //         }
    //     })
    // }
    return(
        <div>
            <form>
                <label>Email :</label>
                <input type='email'name='email' onChange={setValue}/>

                <label>Password :</label>
                <input type='password' name="password" onChange={setValue}/>

                {/* <button type="button" onClick={checkLogin}>Login</button> */}
            </form>
        </div>
    )
}
export default Login

//(REGISTRATION FORM CODE USING REACT & BOOTSTRAP)

// import React from 'react';
// //import{useNavigate} from 'react-router-dom'
// import './registration.css'

// const Registration = () =>{
//             //let navigation = useNavigate();

//     const userObj=[
//         {
//             fname:'',
//             mname:'',
//             lname:'',
//             gender:'',
//             email:'',
//             mNumber:'',
//             password:'',
//             cPassword:''
//         }
//     ]
//     const[inputData,setInputData]=React.useState(userObj);

//     const handleChange =(event)=>{
//         setInputData({...inputData,[event.target.name]:event.target.value});
       
//     }

//     const handleClick =(event)=>{
//         event.preventDefault();
//        // navigation('/home',{state:inputData});
//     }

// return(
   
//         <center>
//             <h2>Register here</h2>
//         <div className='main-container border border-light rounded-2 m-5'>
       
//         <div className='form-floating m-3'>
//         <input className='form-control' type='text' onChange={handleChange} id='fname' name='fname' placeholder='First Name' />
//          <label for='fname'>First Name</label>   
//         </div>

//         <div className='form-floating m-3'>
//         <input className='form-control' type='text' onChange={handleChange} id='mname' name='mname' placeholder='Middle Name'/>
//         <label for ='mname'>Middle Name</label>    
//         </div>

//         <div className='form-floating m-3'>
//         <input className='form-control' type='text' onChange={handleChange} id='lname' name='lname' placeholder='Last Name'/>
//         <label for='lname'>Last Name</label>   
//         </div>

        
//         <div className='container-fluid'>
//         <label>Gender : -</label>
//         <div className='form-check'>
//         <input className='form-check-input' type='radio' onChange={handleChange} name='gender' id='gender'/>
//         <label class='form-check-label' for='gender'>Female</label>    
//         </div>

//         <div className='form-check'>
//         <input className='form-check-input' type='radio' onChange={handleChange} name='gender' id='gender'/>
//         <label class='form-check-label' for='gender'>Male</label>    
//         </div>

//         <div className='form-check'>
//         <input className='form-check-input' type='radio' onChange={handleChange} name='gender' id='gender'/>
//         <label class='form-check-label' for='gender'>Other</label>    
//         </div>
//         </div>

//         <div className='form-floating m-3'>
//         <input className='form-control' type='email' onChange={handleChange} id='email' name='email' placeholder='Email'/>
//         <label for='email'>Email</label>    
//         </div>

//         <div className='form-floating m-3'>
//         <input className='form-control' type='text' onChange={handleChange} id='mNumber' name='mNumber' placeholder='Mobile Number'/>
//         <label for='mNumber'>Mobile Number</label>    
//         </div>  

//         <div className='form-floating m-3'>
//         <input className='form-control' type='password' onChange={handleChange} id='password' name='password' placeholder='Password'/>
//         <label for='password'>Password</label>
//         </div>

//         <div className='form-floating m-3'>
//         <input className='form-control' type='password' onChange={handleChange} id='cPassword' name='cPassword' placeholder='Confirm Password'/>
//         <label for='cPassword'>Confirm Password</label>
//         </div>  


//         <button className='col-6 bttn btn-success' type='button' onClick={handleClick}>Submit</button>

//         </div>
//         </center>
       
//     )
// }
// export default Registration