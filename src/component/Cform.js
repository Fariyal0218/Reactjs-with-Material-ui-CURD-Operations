import React from "react"
import './cform.css'


const Cform =()=>{


    const userObj= 
        {
            customerID:'',
            name:'',
            address:'',
            phoneNumber:'',
            email:'',
            summary:''

        }
    


    const[user,setUser]=React.useState(userObj)


    const onChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const handleClick=(event)=>{
        event.preventDefault()
    }



    return(
    
        <div>
           

        <div>
        <center><h2>Customer Details</h2></center>
        </div>

        <center>
        <form className="m-container"  >
            
        <div> 
        <label for='customerID'></label>
        <input type='text' placeholder='Customer ID' name="customerID" onChange={onChange} />
        </div>
        <br/>

        <div >
            <label for='Name'></label>
            <input type='text' placeholder="Name" name="name"   onChange={onChange} />
        </div>
        <br/>

        <div>
            <label for='Address'></label>
            <input type='text' placeholder="Address" name="address" onChange={onChange} />
        </div>
        <br/>

        <div>
            <label for='phoneNumber'></label>
            <input type='text' placeholder=" PhoneNumber" name="phoneNumber"   onChange={onChange} />
        </div>
        <br/>

        <div>
            <label for='email'></label>
            <input type='email' placeholder="Email" name="email"  onChange={onChange} />
        </div>
        <br/>

        <div>
        <label for='summary'></label>
        <textarea id='summary' placeholder="Summary" name='summary' rows='4' col='50%'   onChange={onChange} >
        </textarea>
        </div>
        <br/>

        <div >
        <button className='btnn' type="submit" value='Submit' onClick={handleClick} >Submit</button>
        </div>

        </form>
        </center>

            
        </div>
       
    )
}

    



export default Cform