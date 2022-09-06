import { makeStyles } from "@material-ui/styles";
import {  IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField,Button, Modal,Typography,Box,Stack} from "@mui/material";
import { Paper } from '@mui/material';
import React, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { useForm } from "react-hook-form";
import { TuneOutlined } from "@material-ui/icons";

const useStyles = makeStyles({

    table:{

        minWidth:650

    }

});

const style = {

    position: "absolute" ,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height:500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,

  };

  const styles = {

    position: "absolute" ,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,

  };

  const stylee = {

    position: "absolute" ,
    top: "47%",
    left: "47.8%",
    transform: "translate(-50%, -50%)",
    width: 700,
    height:400,
    bgcolor: "background.paper",
    border: "2px solid white",
    p: 4,

  };

    const STable=()=>{

        const classes = useStyles();


        //  const handleEdit= values=>{

        //      console.log("The Values that you wish to edit",values);
       
        //  };


        const originalRows = [

            { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },

            { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },

            { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },

            { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },

            { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },

            { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 },
          
        ];


    const [rows, setRows] = useState(originalRows);

    const[text,setText]=React.useState('')

    const[search,setSearch]=React.useState('')


    const fetchData=(event)=>{

        setText(event.target.value)

    }


    const getData=()=>{

        setSearch(text)
    }

// search textfield 

    const filteredData=React.useMemo(()=>

             originalRows.filter((user)=>{

             console.log('hi');

            return user.name.toLowerCase().includes(search.toLowerCase())

    })

    ,[search])

    const [filterItemOpen, setFilterItemOpen] = React.useState(false);

    const handleFilterItemOpen = () => setFilterItemOpen(true);

    const handleFilterItemClose = () => setFilterItemOpen(false);


    return(
        <>
        <Paper>

            <Box m={4} p={3} sx={{width: 7/12,

                marginLeft: 30,}}>

            < TextField  fullWidth value={text}

            onChange={fetchData}
            
            label="Search..." variant="outlined" 

                 InputProps={{

                     endAdornment:(

                    <InputAdornment >

                    <IconButton onClick={getData}>

                        <SearchIcon/>
                        
                    </IconButton>



                    <IconButton onClick={handleFilterItemOpen}>

                    <TuneOutlined

                    fontSize="inherit"
                    style={{ fontSize: "30px" }}
                    />

                    </IconButton>
                    
                    </InputAdornment>
                )

            }}
            
            />
            
       </Box >

            <Modal

                open={filterItemOpen}
                onClose={handleFilterItemClose}
                aria-labelledby="modal-modal-title"
                >

                <Box sx={stylee}>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                
                </Box>
            </Modal>
       
    
        <TableContainer component={Paper}>

            <Table className={classes.table} aria-label="Simple table">

                <TableHead>

                    <TableRow>

                        <TableCell>Dessert</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    
                     </TableRow>

                   </TableHead>

               
                         {/* handleEdit={handleEdit} */}

                     <TableCells userList={filteredData}  />
 
            </Table>

        </TableContainer>

        </Paper>

        </>

    );
};




//handleEdit

        function TableCells({userList}){

                     const obj={

                            dessert:'',
                            calories:'',
                            fat:'',
                            carbs:'',
                            protein:''

                        }

  
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);


    const [deleteItemModalOpen,setDeleteItemModalOpen]=React.useState(false);

    const handleDeleteItemModalOpen =() =>setDeleteItemModalOpen(true);

    const handleCloseDeleteItemModal =() => setDeleteItemModalOpen(false);



    const {register,setValue,handleSubmit,control} = useForm ({  
        
        mode: "onChange" 
    
    })

    const[userData,setUserData]=React.useState([])


    const onSubmit = (data) => {

        console.log(data);
        setUserData([...userData,data])

    };

    const sendData=(userObj)=>{

        console.log("", userObj);

        const fields=[
             'name',
             'calories',
             'fat',
             'carbs',
             'protein'
        ]

        fields.forEach(field=>

            {setValue(field,userObj[field])}
  
            )
    }

    return(

        <TableBody>
            
            {
                userList.map(row=>(
                    
                    <TableRow key={row.name}>

                        <TableCell component="th" scope="row">{row.name}</TableCell>

                        <TableCell align="right">{row.calories}</TableCell>

                        <TableCell align="right">{row.fat}</TableCell>

                        <TableCell align="right">{row.carbs}</TableCell>
                        
                        <TableCell align="right">{row.protein}</TableCell>

                        
                        <TableCell align="right">

                        <Button aria-label="edit" color="primary" variant="outlined"  onClick={()=>{handleOpen();
                            
                        sendData(row);}}>Edit</Button>{" "}
                        

                        <Button color="error" variant="outlined" onClick={handleDeleteItemModalOpen}>Delete</Button>
                        
                        </TableCell>



                        <form onSubmit={handleSubmit(onSubmit)}>
                        <Modal
                        open={open}
                        aria-labelledby="modal-modal-title"
                        >

                        <Box sx={style}>

                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit Details
                        </Typography>

                        <Box


                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}

                            noValidate

                            autoComplete="off"
                            
                            >

                        <TextField id="outlined-basic" name="dessert" type="text" label="Dessert" placeholder="Dessert" variant="outlined"
                        {...register('name')}/>

                        <TextField id="outlined-basic" name="calories" type="text" label="Calories" placeholder="Calories" variant="outlined"
                        {...register('calories')}/>

                        <TextField id="outlined-basic" name="fat" type="text" label="Fat (g)" placeholder="Fat (g)" variant="outlined"
                         {...register('fat')}/>

                        <TextField id="outlined-basic" name="carbs" type="text"  label="Carbs (g)" placeholder="Carbs (g)" variant="outlined"
                        {...register('carbs')}/>

                        <TextField id="outlined-basic" name="protein" type="text"  label="Protein (g)" placeholder="Protein (g)" variant="outlined"
                        {...register('protein')}/>

                        <Stack direction="row" spacing={2} >

                        <Button  color="primary" variant="outlined" onClick={handleClose} >Cancel</Button>
                        
                        <Button color="primary" type="submit" variant="contained" onClick={handleClose}>Submit</Button>
                                                
                        </Stack>
                        
                        </Box>

                        </Box>

                        </Modal>
                        </form>
                        
                        <Modal  open={deleteItemModalOpen}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" >

                         <Box sx={styles}>

                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Delete Item
                            </Typography>


                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Are you sure you want to delete this item ?
                            </Typography>
                        
                     <Stack direction="row" spacing={2} sx={{ml:16,  pt:4}} >

                     <Button  color="primary" variant="outlined"  onClick={handleCloseDeleteItemModal}>
                         Cancel
                     </Button>

                    <Button color="primary" type="submit" variant="contained" >
                      Delete
                     </Button>
                     
                     </Stack>
                     
                    </Box>

                    </Modal>

                    </TableRow>

                    
                    ))}

                    </TableBody>
    );
                }

export default STable