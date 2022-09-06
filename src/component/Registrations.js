//registration form using class component with validations
//using{react,bootstrap,javascript}


import { render } from '@testing-library/react';
import React, { Component } from 'react';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };


class Registrations extends  Component{
    constructor(props){
        super(props);

    this.state= {
            fname: null,
            mname: null,
            lname: null,
            gender: null,
            email: null,
            mNumber: null,
            password: null,
            cPassword: null,
            formErrors: {
            fname: "",
            mname:"",
            lname:"",
            gender:"",
            email:"",
            mNumber:"",
            password:"",
            cPassword:""
      }
    };
  
} 


    handleSubmit= e =>{
        e.preventDefault();

        if (formValid(this.state)) { 
            console.log(`
                --SUBMITTING--
                First Name: ${this.state.fname}
                Middle Name: ${this.state.mname}
                Last Name: ${this.state.lname}
                Gender: ${this.state.gender}
                Email: ${this.state.email}
                Mobile Number : ${this.state.mNumber}
                Password: ${this.state.password}
                Confirm Password: ${this.state.cPassword}

            `);
        }else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e=>{
       e.preventDefault();
       const { name, value }=e.target;
       let formErrors = { ...this.state.formErrors};

       switch(name){
        case "fname":
            formErrors.fname =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
    
            case "mname":
            formErrors.mname =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;

          case "lname":
            formErrors.lname =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;

            case "gender":
                formErrors.gender =
              value.length < 1 ? "minimum 1 characaters required" : "";
            break;
    
            case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;

            case "mNumber":
            formErrors.mNumber =
              value.length < 10 ? "minimum 10 characaters required" : "";
            break;
            
    
            case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
            
            case "cPassword":
            formErrors.cPassword=
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;

            default:
            break; 
       }

       this.setState({ formErrors, [name]: value }, () => console.log(this.state));
   };

        render(){
        
          const { formErrors } = this.state;
    


return(
   
        <center>
            <h2>Register here</h2>
           
           <form onSubmit={this.handleSubmit} noValidate>

        <div className='main-container border border-light rounded-2 m-5'>
       
        <div className='form-floating m-3'>
        <input className={`form-control ${formErrors.fname.length > 0 ? "error" : null}`}
        placeholder='First Name'
        type='text' 
        name='fname'
        noValidate 
        onChange={this.handleChange} id='fname' />
         <label for='fname'>First Name</label>   
         {formErrors.fname.length > 0 && (
           <span className="errorMessage">{formErrors.fname}</span>  
         )}  

        </div>

        <div className='form-floating m-3'>
        <input className={`form-control ${formErrors.mname.length > 0 ? "error" : null}`}
         placeholder='Middle Name'
         type='text' 
         name='mname'
         noValidate
        onChange={this.handleChange}  id='mname'/>
         <label for='fname'>Middle Name</label>   
        {formErrors.mname.length > 0 && (
        <span className="errorMessage">{formErrors.mname}</span>  
         )}    
        </div>

        <div className='form-floating m-3'>
        <input className={`form-control ${formErrors.lname.length > 0 ? "error" : null}`}
        placeholder='Last Name'
        type='text' 
        name='lname'
        noValidate
        onChange={this.handleChange} id='lname' />
         <label for='fname'>Last Name</label>   
        {formErrors.lname.length > 0 && (
        <span className="errorMessage">{formErrors.lname}</span>  
         )}    
        </div>

        
        <div className='container-fluid'>
        <label>Gender : -</label>
        <div className='form-check'>
        <input className={`form-check-input ${formErrors.gender.length > 0 ? "error" : null}` }
        type='radio' 
        name='gender' 
        noValidate
        onChange={this.handleChange}  id='gender'/>
        <label class='form-check-label' for='gender'>Female</label>    
        {formErrors.gender.length > 0 && (
        <span className="errorMessage">{formErrors.gender}</span>  
         )}    
        </div>

        <div className='form-check'>
        <input className={`form-check-input ${formErrors.gender.length > 0 ? "error" : null}`}
         type='radio' 
         name='gender' 
         noValidate
         onChange={this.handleChange} id='gender'/>
        <label class='form-check-label' for='gender'>Male</label>    
        {formErrors.gender.length > 0 && (
        <span className="errorMessage">{formErrors.gender}</span>  
         )}    
        </div>

        <div className='form-check'>
        <input className={`form-check-input ${formErrors.gender.length > 0 ? "error" : null}`}
        type='radio' 
        name='gender' 
        noValidate
        onChange={this.handleChange} id='gender'/>
        <label class='form-check-label' for='gender'>Other</label>    
        {formErrors.gender.length > 0 && (
        <span className="errorMessage">{formErrors.gender}</span>  
         )}   

        </div>
        </div>

        <div className='form-floating m-3'>
        <input className={`form-control ${formErrors.email.length > 0 ? "error" : null}`}
        placeholder='Email'
        type='email' 
        name='email' 
        noValidate
        onChange={this.handleChange} id='email' />
         <label for='fname'> Email</label>   
        {formErrors.email.length > 0 && (
         <span className="errorMessage">{formErrors.email}</span>
              )}
        </div>

        <div className='form-floating m-3'>
        <input className={`form-control ${formErrors.mNumber.length > 0 ? "error" : null}`}
        placeholder='Mobile Number'
        type='text' 
        name='mNumber' 
        noValidate
        onChange={this.handleChange} 
        id='mNumber' />
         <label for='fname'>Mobile Number</label>  
        {formErrors.mNumber.length > 0 && (
         <span className="errorMessage">{formErrors.mNumber}</span>
          )}
        </div>  

        <div className='form-floating m-3'>
        <input className={`form-control ${formErrors.password.length > 0 ? "error" : null}`}   
        placeholder='Password'
       type='password'
        name='password'
        noValidate 
        onChange={this.handleChange} 
        id='password'/>
         <label for='fname'>Password</label>   
        {formErrors.password.length > 0 && (
         <span className="errorMessage">{formErrors.password}</span>
         )}
        </div>
        
        <div className='form-floating m-3'>
        <input className={`form-control ${formErrors.cPassword.length > 0 ? "error" : null}`}
        placeholder='Confirm Password'
        type='password' 
        name='cPassword' 
        noValidate
        onChange={this.handleChange} 
        id='cPassword'/>
         <label for='fname'>Confirm Password</label>   
        {formErrors.cPassword.length > 0 && (
         <span className="errorMessage">{formErrors.cPassword}</span>
         )}
        </div>  

        <div>

        <button className='col-6 bttn btn-success' type='button'>Submit</button>
        
        </div>

        </div>
        </form>
        </center>
       
    );
        }
}

export default Registrations