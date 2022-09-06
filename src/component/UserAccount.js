import React from 'react';

import {Link} from 'react-router-dom'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,

};

export default function UserAccount() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const userObj={
        id:'',
        name:'',
        address:'',
        phone:'',
        email:'',
        summary:''
    }

    const [data,setData]=React.useState(userObj);
    const [value,setValue]=React.useState([]);
    const [boolean,setBoolean]=React.useState(false)


    const userValue=(event)=>{
       setData({...data,[event.target.name]:event.target.value})
    }

    const DisplayData=(e)=>{
        e.preventDefault()
        setValue([...value,data])
        setData(userObj)
        setBoolean(true)
        setOpen(false)
    }

    console.log(data)

    return (
        <div>
        
           
         
           
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} id="box">
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='NewOnee'>
                        Customer Detail
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                    <Box

                    />

                    <div className='NewOne'>
                        <div id='text' >
                            <TextField
                                required

                                id="outlined-required"
                                label="Customer ID "
                                defaultValue=""
                                name='id'
                                onChange={userValue}
                

                            />
                        </div >

                        <div className='NewTwo'>
                            <TextField
                                id="outlined-disabled"
                                label="Name "
                                defaultValue=""
                                name='name'
                                onChange={userValue}
                            /></div>
                        <div className='NewThree'><TextField
                            id="outlined-password-input"
                            label="Address"
                            type="text"
                            autoComplete="current-password"
                            name='address'
                                onChange={userValue}
                        /></div>
                        <div className='NewFour'>  <TextField
                            id="outlined-read-only-input"
                            label="Phone"
                            defaultValue=" "
                            // InputProps={{
                            //     readOnly: true,
                            // }}
                            name='phone'
                                onChange={userValue}
                        /></div>
                        <div className='NewFive'>
                            <TextField id="outlined-search" label="E-Mail" type="email" />
                        </div>

                        <div className='NewSix'>
                            <TextField
                                id="outlined-helperText"
                                label="Summary"
                                defaultValue=""
                                name='summary'
                                onChange={userValue}
                            />
                        </div>

                       



                        

                        <button id='btn' onClick={DisplayData}>Submit</button>
                    </div>
                   <div>
                 
                   </div>
                </Box>
               
            </Modal>
{/* <div id='position'>
            <table style={{ border: "2px solid black", borderCollapse: "collapse", width: "100%",marginTop:"100px" }} >
                 <tr>
                    <th>Customer-ID </th>
                   <th >Name</th>
                   <th >Address</th>
                     <th >Phone</th>
                     <th >E-Mail</th>
                     <th>Summary</th>
    
                </tr>
                    <tr> 
                        <td>{data.id}</td>
                        <td >{data.name}</td>
                        <td >{data.address}</td>
                        <td >{data.phone}</td>
                        <td>{data.email}</td>
                        <td >{data.summary}</td>
                    </tr>
               </table>
               </div> */}


           
            <button id='add-new' onClick={handleOpen} ><a style={{ textDecoration: "none" }} >Add New Customer</a></button>

        
            <button id='home'><Link to='/'>Home</Link></button>

       

            {/* {show ? <State state={state}></State> : ''} */}



            {/* <img src={img4} /> */}
            {boolean ?<UserList value={value}></UserList>:" "}
        </div>
    )
}



function UserList({ value }) {
    return (

        <div id='position'>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Summary</th>
                </tr>
                {value.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.summary}</td>
                    </tr>
                ))}

       

            </table>
        </div>
    )
}