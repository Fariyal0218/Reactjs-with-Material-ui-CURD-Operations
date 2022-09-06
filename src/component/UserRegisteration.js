//React form validation with React Hook RegsitrationForm and Yup

import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import './user.css';


    const UserRegisteration = () =>{

        const schema = yup.object().shape({

            firstName: yup.string().required('FirstName is required')
            .min(6, 'FirstName must be at least 6 characters')
            .max(20, 'FirstName must not exceed 20 characters'),

            lastName: yup.string().required(),

            dob: yup.string().required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),

            phoneNumber: yup.number().positive().integer().min(10).required(),

            course: yup.string().required(),
            
            email: yup.string().email().required(),

            password: yup.string().min(8).max(32).required(),

            confirmPwd: yup.string().required().oneOf([yup.ref('password')],'Passwords does not match'),

            acceptTerms: yup.bool().oneOf([true], 'Accept Ts & Cs is required')
            
        });


            const { 

             register,handleSubmit,formState : {errors }, reset} = useForm({

                resolver : yupResolver(schema),

            });

            const onSubmitHandler=(data)=>{
               
              //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));

                console.log({data});
               
                reset();
                
            };
   
          
   
        return(

            <form  onSubmit={handleSubmit(onSubmitHandler)}>

            <h2>Register Here</h2>
            <br/>
            
            <input type="text" id="firstName" {...register("firstName")} placeholder="First Name" />
            <p>{errors.firstName?.message}</p>
            <br/>

            <input type="text"  id="lastName"  {...register("lastName")} placeholder="Last Name" required/>
            <p>{errors.lastName?.message}</p>
            <br/>

            <input type="date"  id="dob" {...register('dob')} placeholder="Date of Birth" required/>
            <p>{errors.dob?.message}</p>
            <br/>

            
            <input type="radio"  id="gender" value="Male"{...register('gender',{required:true})} />
            <label>Male</label>
            <br/>

            <input type="radio"  id="gender" value="Female" {...register('gender',{required:true})}/>
            <label>Female</label>
            <br/>

            <input type="radio"  id="gender" value="Other" {...register('gender',{required:true})}/>
            <label>Other</label>
            <p>{errors.gender?.message}</p>
            <br/>
            
            <input type="number" id="phoneNumber" {...register("phoneNumber")} placeholder="PhoneNumber"  required/>
            <p>{errors.phoneNumber?.message}</p>
            <br/>

            <select id="course" {...register('course')} placeholder="Course" required>
                <option value="">Select Course</option>
                <option value="BE">BE</option>
                <option value="BCA">BCA</option>
                <option value="BCS">BCS</option>
                <option value="B.Tech">B.Tech</option>  
            </select>
            <p>{errors.course?.message}</p>
            <br/>

            <input type="email" id="email" {...register("email")} placeholder="Email"  required />
            <p>{errors.email?.message}</p>
            <br/>

            <input type="password" id="password" {...register("password")}  placeholder="Password" required/>
            <p>{errors.password?.message}</p>
            <br/>

            <input type="password" id="confirmPwd" {...register('confirmPwd')} placeholder="Confirm Password"  required/>
            <p>{errors.confirmPwd?.message}</p>
            <br/>
            
            <input type="checkbox" id="acceptTerms" {...register('acceptTerms')}  required/>
            <label >Accept Terms and Conditions</label>
            <p>{errors.acceptTerms?.message}</p>
            <br/>


            <button type="submit">Register</button>

        </form>
    );
};
export default UserRegisteration