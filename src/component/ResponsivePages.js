// // LOGIN PAGE CODE RESPONSIVE PAGE 

// import React from 'react'
// import axios from 'axios'
// import {Link, useNavigate} from 'react-router-dom'
// import './login.css'
// import { useState, useEffect } from 'react'

// const Login = () => {

//         const initialValues = {
//                 email: '',
//                 password: ''
//         }
    
//       const [formValues,setFormValues]= useState(initialValues);

//       const [formErrors,setFormErrors]= useState({});

//       const [isSubmit , setIsSubmit]=useState(false);

//         const handleChange=(event)=>{

//             const{name,value}=event.target;
//             setFormValues({...formValues, [name]:value});
//         };

//          const handleSubmit =(event)=>{
//             event.preventDefault();
//             setFormErrors(validate(formValues));
//             setIsSubmit(true);
   
//         };
//         useEffect(() => {
//             console.log(formErrors);
//             if(Object.keys(formErrors).length === 0 && isSubmit){
//                 console.log(formValues);
//             }

//         },[formErrors]);

//             const validate =(values)=>{
//             const errors={};
//             const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//             if(!values.email){
//                 errors.email = "Email is required!";
//             }else if (!regex.test(values.email)){
//                 errors.email = "This is not a valid email format!";
//             }
//             if(!values.password){
//                 errors.password= "Password is required";
//             }else if (values.password.length < 7){
//                 errors.password =" Password must be more than 7 characters ";
//             }else if (values.password.length >15){
//                 errors.password= "Password cannot exceed more than 15 characters "
//             }
//             return errors;
//         };

//     return (
//              <form onSubmit={handleSubmit}>
            
//              <div id='txt'>
            
//              <p>
//                 Dont't have an account?<button><Link to="registration">Register here</Link></button>
//             </p>

//             <h2>Login</h2>
        
//             <div className='container border border-white rounded-2  '>
            
//             <div className='text-center'>
//              <img src='https://thumbs.dreamstime.com/b/user-profile-icon-isolated-glassy-vibrant-sky-blue-round-button-illustration-user-profile-icon-glassy-vibrant-sky-blue-round-167324536.jpg' class="img-fluid"  alt='Responsive image' />   
//             </div>

//             <div className='form-floating m-3'>

//                 <input className='form-control' 
//                 placeholder='Enter Email'
//                 type='email' 
//                 name='email' 
//                 value ={formValues.email} 
//                 onChange={handleChange} />
//                 <label for='email'>Enter Email</label>
           
//             </div>

//             <p>{formErrors.email}</p>

//             <div className='form-floating m-3'>

//                 <input className='form-control' 
//                 placeholder='Enter Password' 
//                 type='password' 
//                 name='password' 
//                 value ={formValues.password} 
//                  onChange={handleChange} />            
//                 <label for='password'>Enter Password</label>
//             </div>

//             <p>{formErrors.password}</p>

//             <div>

//             <button className=' col-6 btn btn-success ' type='submit'>Login</button>

            
//             </div>
//             <br/>
           

//       </div>
//      </div>
//     </form>
//     )

// }

// export default Login


//REGISTRATION RESPONSIVE PAGE CODE

// import React from 'react';
// import './registration.css'

// const Registration = () =>{
        

//     const userObj=[
//         {
//             fname:'',
//             mname:'',
//             lname:'',
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
       
//     }

// return(

//         <form >
        
//         <h2>Register here</h2>
        
//         <div class="main-container">
//         <div class="form-inline row ">
//         <div class='form-group col-md-4 mb-4'>
//         <input class='form-control' type='text' onChange={handleChange} id='fname' name='fname' placeholder='First Name' />
//         </div>

//         <div class='form-group col-md-4 mb-4'>
//         <input class='form-control' type='text' onChange={handleChange} id='mname' name='mname' placeholder='Middle Name'/>
//         </div>
        

//         <div class='form-group  col-md-4 mb-4'>
//         <input class='form-control' type='text' onChange={handleChange} id='lname' name='lname' placeholder='Last Name'/>
        
//         </div>
//         </div>
        

//         <div class="form-inline row">
//         <div class='form-group col-md-4 mb-4'>
//         <input class='form-control' type='email' onChange={handleChange} id='email' name='email' placeholder='Email'/>
//         </div>

//         <div class='form-group col-md-4 mb-4'>
//         <input class='form-control' type='text' onChange={handleChange} id='mNumber' name='mNumber' placeholder='Mobile Number'/>
//         </div>  

//         <div class='form-group col-md-4 mb-4'>

//         <select class="select">
//             <option value="1" disabled>Gender</option>
//             <option value="2">Female</option>
//             <option value="3">Male</option>
//             <option value="4">Other</option>
//         </select>
//         </div>
//         </div>
        
//         <div class="row justify-content-center">
//         <div class='form-group col-md-4 mb-4'>
//         <input class='form-control' type='password' onChange={handleChange} id='password' name='password' placeholder='Password'/>
//         </div>
       

//         <div class='form-group col-md-4 mb-4'>
//         <input class='form-control' type='password' onChange={handleChange} id='cPassword' name='cPassword' placeholder='Confirm Password'/>
//         </div>  
//         </div>

//         <button className='col-6 bttn btn-success' type='button' onClick={handleClick}>Submit</button>
       
//         </div>
//         </form>
        
       
//     )
// }
// export default Registration



//REGISTRATION RESPONSIVE PAGE USING REACT, AND MATERIAL UI

// import { TextField } from '@mui/material';
// import { Button } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';
// import './registration.css'


// const Registration = () =>{
        

//     const userObj=[
//         {
//             fname:'',
//             mname:'',
//             lname:'',
//             email:'',
//             mNumber:'',
//             city:'',
//             address:'',
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
       
//     }

// return(

        
        
        
//         <div class="main-container">

//         <h2>Register here</h2>

//         <Box 
//         component="form"

//         sx={{
            
//             '& .MuiTextField-root': { m: 1, width: '25ch' },

//         }}
//         > 
//         <div>
//         <TextField id='fname' type="text" name='fname' label="First Name" margin="normal" onChange={handleChange}/>


//         <TextField id='mname' type="text" name='mname'label="Middle Name" margin='normal'  onChange={handleChange}/>
       

//         <TextField id='lname' type='text'  name='lname' label="Last Name" margin="normal"  onChange={handleChange} />
        
//         </div>
        

//         <div>
//         <TextField id='email' type='email' name='email' label="Email" margin="normal" onChange={handleChange}/>


//         <TextField   id='mNumber' type='text' name='mNumber' label="Mobile Number" margin="normal" onChange={handleChange} />

//         <TextField   id='city' type='text' name='city' label="City" margin="normal" onChange={handleChange} />

//         </div>
        
//         <div>
//         <TextField   id='address' type='text' name='address' label="Address" margin="normal" onChange={handleChange} />

//         <TextField  id='password' type='password' name='password' label="Password" margin="normal" onChange={handleChange}/>
       

//         <TextField  id='cPassword' type='password' name='cPassword' label="Confirm Password" margin="normal" onChange={handleChange}/>

//         </div>

       
//        <div>
//        <Button variant="contained" type='button' size="large"  onClick={handleClick}>Submit</Button>
//        </div>
//        </Box>

//         </div>
        
       
//     )
// }
// export default Registration




//Registeration Page iusing Material UI with Javascript Validations 



// import { Container, Grid, TextField } from '@mui/material';
// import { Button } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react';
// import './registration.css'
// import { useState, useEffect } from "react";


// const Registration = () =>{
        

//     const userObj=[
//         {
//             fname:'',
//             mname:'',
//             lname:'',
//             email:'',
//             mNumber:'',
//             city:'',
//             address:'',
//             password:'',
//             cPassword:''
//         }
//     ]
//     const[formValues,setFormValues]=React.useState(userObj);

//     const[formErrors,setFormErrors]=useState({});

//     const[isSubmit,setIsSubmit]=useState(false);

//     const handleChange =(event)=>{
//         const{name,value}=event.target;
//         setFormValues({...formValues, [name]:value});
       
//     };
//     const handleSubmit=(event)=>{
//         event.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);
        
//     };

//     useEffect(()=>{
//         console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//              console.log(formValues);
//       }
//         },[formErrors]);


//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
//         if (!values.fname) {
//             errors.fname = "First Name is required!";
//           }

//           if (!values.mname) {
//             errors.mname = "Middle Name is required!";
//           }

//           if (!values.lname) {
//             errors.lname = "Last Name is required!";
//           }

//           if (!values.email) {
//             errors.email = "Email is required!";
//           } else if (!regex.test(values.email)) {
//             errors.email = "This is not a valid email format!";
//           }

//           if (!values.mNumber) {
//             errors.mNumber = "Mobile Number is required!";
//           }else if (values.mNumber.length < 10) {
//             errors.password = "Mobile Number must be  10 digit";
//           } else if (values.mNumber.length > 10) {
//             errors.password = "Mobile Number cannot exceed more than 10 digit";
//           }

//           if (!values.city) {
//             errors.city = "City is required!";
//           }

//           if (!values.address) {
//             errors.address = "Address is required!";
//           }

//           if (!values.password){

//           errors.password = "Password is required";

//           }else if (formValues.password && values !== formValues.cPassword){
//             errors.password = "Password and Confirm Password does not match.";
//           }else{
//             errors.password = formValues.cPassword ? "" : errors.password;
//           }

//           if (!values.cPassword){

//             errors.cPassword = "Confirm Password is required";
            
//           }else if (formValues.cPassword && values !== formValues.password){

//             errors.cPassword = "Password and Confirm Password is match.";
            
//           }else{
//             errors.cPassword= formValues.password ? "" : errors.cPassword;
//           }

          
//           return errors;
//         };

//         return(

//        <form onSubmit={handleSubmit}>
//         <Container>

//         <h2>Register here</h2>
//         <Box mt={2} >

//         <Grid container spacing={1} justifyContent="center" >
        
//          <Grid item  xs={8} md={4} >  
//          <TextField  multiline rows={1} fullWidth 
//          label="First Name" id='fname'  
//          margin = "normal" type="text" name='fname' variant="outlined"  
//          value={formValues.fname} onChange={handleChange}/>
//          </Grid> 

//         <p>{formErrors.fname}</p>

//          <Grid item xs={8} md={4}>  
//         <TextField  multiline rows={1} fullWidth 
//         label="Middle Name" id='mname'  
//         margin = "normal" type="text" name='mname' variant="outlined" 
//         value={formValues.mname} onChange={handleChange}/>
//         </Grid>
        
//         <p>{formErrors.mname}</p>

//         <Grid item xs={8} md={4}>  
//          <TextField  multiline rows={1} fullWidth 
//          label="Last Name" id='lname'
//           margin = "normal" type='text'  name='lname'  variant="outlined"  
//           value={formValues.lname} onChange={handleChange} />
//         </Grid>

//         <p>{formErrors.lname}</p>
        
//         <Grid item xs={8} md={4}>  
//         <TextField multiline rows={1} fullWidth 
//         label="Email" id='email'
//          margin ="normal" type='email' name='email' variant="outlined" 
//          value={formValues.email} onChange={handleChange}/>
//         </Grid>

//         <p>{formErrors.email}</p>

//         <Grid item xs={8} md={4}>  
//         <TextField  multiline rows={1} fullWidth 
//         label="Mobile Number"  id='mNumber'
//          margin="normal" type='text' name='mNumber' variant='outlined' 
//          value={formValues.mNumber} onChange={handleChange} />
//         </Grid>

//         <p>{formErrors.mNumber}</p>

//         <Grid item xs={8} md={4}>  
//         <TextField multiline rows={1} fullWidth 
//         label="City" id='city' 
//         margin="normal" type='text' name='city' variant='outlined' 
//         value={formValues.city} onChange={handleChange} />
//        </Grid>

//        <p>{formErrors.city}</p>
       

//        <Grid item xs={8} md={4}>  

//         <TextField  multiline rows={1} fullWidth 
//         label="Address"  id='address' 
//          margin="normal" type='text' name='address' variant='outlined' 
//          value={formValues.address} onChange={handleChange} />
//         </Grid>

//        <p>{formErrors.address}</p>

//        <Grid item xs={8} md={4}>  
//          <TextField  multiline rows={1} fullWidth 
//          label="Password"  id='password' margin="normal"
//          type='password' name='password' variant='outlined' 
//          value={formValues.password} onChange={handleChange}/>
//        </Grid>

//           <p>{formErrors.password}</p>

//        <Grid item xs={8} md={4}>  
//         <TextField multiline rows={1} fullWidth 
//         label="Confirm Password" id='cPassword'  margin="normal"
//         type='password' name='cPassword' variant='outlined' 
//         value={formValues.cPassword} onChange={handleChange}/>
//         </Grid>

//         <p>{formErrors.cPassword}</p>

//         </Grid>
//         </Box>

//        <div>
//        <Box mt={4}>
//        <Button style={{maxWidth: '35%', maxHeight: '50%', minWidth: '35%', minHeight: '50%'}}
//        variant="contained" 
//        type='submit' margin="normal" size="large">SUBMIT</Button>
//         </Box>
//        </div> 
       
//        </Container>
//         </form>
       
//     )
// }

// export default Registration