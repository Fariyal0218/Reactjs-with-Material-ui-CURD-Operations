import React from 'react';
function LoginForm() {
   
   
  return (
<div className="form">
     <form >
       <div className="input-container">
         <label>Email </label>
         <input type="text" name="email" required />
        
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
        
       </div>
       <div className="button-container">
          <button type="submit">Submit</button>
       </div>
     </form>
   </div>
  )
}

export default LoginForm