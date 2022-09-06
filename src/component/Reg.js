// import React from 'react';

//  function Reg() {
//      const userObj={

//          fullName:'',
//          middleName:'',
//          lastName:'',
//          course:'',
//          gender:'',
//          phone:'',
//          currentAddress:'',
//          email:'',
//          password:'',
//          confirmPassword:'',
//          submit:'',

//      }
//      const[user,setUser]=React.useState(userObj)
     
//      const getValue=(event)=>{
//          setUser({...user,[event.target.name]:event.target.value})
//      }
//      function DoRegistration({getValue}) {

//          return({getValue});
//          console.log("in DoRegistration Function");
//      }
//      const getregforminfo=(event)=>{
//          event.preventDefault()
//          console.log("Received data")
//      }

//      const handleChange=(event)=>{
//          setCourse(event.target.value)
//      }
//      const handleSubmit =(event)=>{
//          event.preventDefault();
//          alert('Registered Sucessfully');
//      }
     
//   return (
//       <div>
//           <form name='regDetails' onSubmit={getregforminfo}>

//               <label> First Name </label>
//               <input type='text' name='firstName' id='firstName' onChange={getValue}/>


//             <label>Middle Name</label>
//             <input type='text' name='middleName' id='middleName' onChange={getValue}/>
               
//                 <br />
            
//             <label>LastName</label>
//             <input type='text' name='lastName' id='lastName' onChange={getValue}/>
            
//             <br />
            
//             <select value={course} onChange={handleChange}>
//                 <option value='BE'>BE</option>
//                 <option value='BCA'>BCA</option>
//                 <option value='BBA'>BBA</option>
//                 <option value='BCS'>BCS</option>
//             </select>
//             <br />
//             <label>Gender</label>
//             <input type='radio' id='female' value='female' checked={true}/>

//             <br />
//             <input type='radio' id='male' value='male' checked={true}/>
//             <br />
//             <input type='radio' id='other' value='other' checked={true}/>
//             <br/>

//             <label>Phone</label>
//             <input type='number' name='phone' id='phone' onChange={getValue}/>
          
//           <label>Current Address</label>
//           <input type='text' name='currentAddress' id='currentAddress' onChange={getValue}/>

//           <label>Email</label>
//           <input type='email' name='email' id='email' onChange={getValue}/>

//           <label>Password</label>
//           <input type='password' name='password' id='password' onChange={getValue}/>

//           <label>Confirm Password</label>
//           <input type='password' name='confirmPassword'id='confirmPassword' onChange={getValue}/>

//            <input type='submit' value='Submit'/>

            

//           </form>
//       </div>
//   )
// }
// export default Reg