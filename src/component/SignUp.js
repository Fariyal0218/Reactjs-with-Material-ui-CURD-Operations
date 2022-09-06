import React, { useState ,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export default function SignUp() {
    
    let navigate =useNavigate();

   const userObj={
        firstName:" ",
        lastName:" ",
        username:"",
        password:" ",
        confirmpassword:" ",
        martialStatus:" ",
        dob:" ",
        eMail:" ",
        homeAddress:" ",
        city:" ",
        state:" ",
        zipCode:" ",
        country:" ",
        phone:" "
    }

    const [user,setUser]=React.useState(userObj)

    const [name,setName]=React.useState([])
    
    const[show,setShow]=React.useState(false)


    const onChange = (event) => {
        setUser({...user,[event.target.name]:event.target.value})
    }

useEffect(()=>{

    

// localStorage.setItem("E-Mail",JSON.stringify(user.eMail))
localStorage.setItem("UserName",JSON.stringify(user.username))
localStorage.setItem("Password",JSON.stringify(user.confirmpassword))
})

const DisplayData=(e)=>{
    e.preventDefault()
    setUser(userObj)
    setName([...name,user])
    setShow(true)
}



// const NewData=()=>{
//     localStorage.setItem("UserName",JSON.stringify(user.username))
//     localStorage.setItem("Number",JSON(user.phone))
//     localStorage.setItem("UserName",JSON.stringify(user.password))
// }
    
    

console.log(user)


    return (
        <div>
            <button id='navHome'><a id='dext' href='/'>Home</a></button>
            {/* <h1>Employee Registration Form</h1> */}

            {/* <p id='one'>Please Fill in the information requested below in order to complete the employee Registration</p> */}

            <form id='form' onSubmit={DisplayData} >
                <label>Emplyee Name*</label><br /><br />
                <input id='first' type='text' placeholder='First' name='firstName' onChange={onChange}></input>
                <input id='Emp2' className='style' type='text' name='lastName' placeholder='Last'  onChange={onChange}></input><br></br><br />

                <label>username</label>
                <input type='text' name='username'  className='style' onChange={onChange}></input>

                
                <label>Password</label>
                <input type='password' name='password' className='style' onChange={onChange}></input><br/><br/>

                <label>Confirm Password</label>
                <input type='password' name='confirmpassword' className='style' onChange={onChange}></input>

                {/* <label>Gender*</label><br />
                <label>Male</label>
                <input id='radio1' type='radio'  ></input>
                <label>Female</label>
                <input type='radio'  ></input><br /><br /> */}

                {/* <label>Martial Status*  </label>
                <select onChange={onChange} name='martialStatus'>
                    <option value='0'>Please Select</option>
                    <option value='1'>Married</option>
                    <option value='2'>Unmarried</option>
                </select> */}

                <label id='labdob'>Date Of Birth*</label>
                <input className='style' type='date' name='dob' onChange={onChange}></input><br /><br />

                {/* <label id='idn'>Identification Number*</label>
             <input  className='style'type="number"></input><br/><br/> */}

                <label>Email*</label>
                <input className='style' type='email' placeholder='Email' name='eMail' onChange={onChange}></input>

                <label id='phone'>Phone*</label>
                <input className='style' type="number" placeholder='Phone' name='phone' onChange={onChange}></input><br /><br />

                <label>Home Address*</label><br /><br />
                <input id='street' placeholder='Home Address' type="text" name='homeAddress' onChange={onChange}></input><br></br><br />
                <input className='homeadd' type="text" placeholder='City' name='city' onChange={onChange}></input>

                <select id='state' onChange={onChange}>
                    <option value='0'>State</option>
                    <option value='1'>Maharastra</option>
                    <option value='2'>Gujrat</option>
                </select><br /><br />

                <input className='zipcode' type="number" name='zipCode' placeholder='ZIP CODE' onChange={onChange}></input>

                <select id='country' name='country' onChange={onChange}>
                    <option value='0'>Country</option>
                    <option value='1'>INDIA</option>
                    <option value='2'>Africa</option>
                </select>
<input id='sign-btn' type='submit' value='submit' onClick={()=>{navigate('/')}}></input>
               
            
            </form>
            {show?<Name name={name}></Name>:''}



    
        </div>
    )
}


function Name({name}){
    return(

<table >
    <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Username</th>
        <th>Password</th>
        <th>Confirm Password</th>
        <th>DOB</th>
        <th>E-Mail</th>
        <th>Phone</th>
        <th>Home-Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zip-Code</th>
        <th>Country</th>
    </tr>
    {name.map((item)=>(
         <tr>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.username}</td>
        <td>{item.password}</td>
        <td>{item.confirmpassword}</td>
        <td>{item.dob}</td>
        <td>{item.eMail}</td>
        <td>{item.phone}</td>
        <td>{item.homeAddress}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        <td>{item.zipCode}</td>
        <td>{item.country}</td>
        </tr>
    ))}
</table>

    )
}

