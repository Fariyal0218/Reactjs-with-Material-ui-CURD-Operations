import { makeStyles } from "@material-ui/styles";
import {  IconButton, InputAdornment, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material";
import { Paper } from '@mui/material';
import React, {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { Box,  } from "@mui/system";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }
  
const useStyles = makeStyles((theme)=>({

    table:{

        minWidth:650

    },
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: "none"
      }

}));


    const SimpleTable=()=>{

        const classes = useStyles();


        // const handleEdit= values=>{

        //     console.log("The Values that you wish to edit",values);
       
        // };

       

        

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


    return(
        <>
        <Paper>

            <Box m={4} p={3} sx={{width: 7/12,

                marginLeft: 30,}}>

            < TextField  fullWidth value={text}

            onChange={fetchData}
            
            label="Search" variant="outlined" 

            InputProps={{
                endAdornment:(
                    <InputAdornment >

                    <IconButton onClick={getData}>

                        <SearchIcon/>
                    </IconButton>
                    </InputAdornment>
                )

            }}
            
            />
       </Box >


        <TableContainer component={Paper}>

            <Table className={classes.table} aria-label="Simple table">

                <TableHead>
                    <TableRow>

                        <TableCell>Dessert(100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        <TableCell align="right">Actions</TableCell>

                    </TableRow>
                </TableHead>

               
                         {/* handleEdit={handleEdit} */}
                     <TableCells userList={filteredData} />

                    
                    {/* {
                        rows.map(row=>(
                    
                        <TableRow key={row.name}>

                        <TableCell component="th" scope="row">{row.name}</TableCell>

                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        <TableCell align="right">

                         <Button aria-label="edit" onClick={()=>handleEdit(row)}> Edit</Button>
                        
                        </TableCell>

                    </TableRow>

                              ))} */
                    }

                
            </Table>

        </TableContainer>
        </Paper>
        </>
    );
};


//handleEdit

function TableCells({userList}){

    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [modalData, setData] = useState();
    
        const data = [

    {
      title: "Edit",
      Info: "Pay me"
    },
   
  ];

  const CustomModal = () => {
    return modalData ? (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>

          <Typography variant="h6" id="modal-title">
            {modalData.Info}
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

        </div>
      </Modal>
    ) : null;
  };

    const handleOpen = (index) => {
        setOpen(true);
        setData(data[index]);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const classes= useStyles();

    return(

        <TableBody>
            
            {
                userList.map((row,d,index)=>(
                    
                    <TableRow key={row.name}>

                        <TableCell component="th" scope="row">{row.name}</TableCell>

                        <TableCell align="right">{row.calories}</TableCell>

                        <TableCell align="right">{row.fat}</TableCell>

                        <TableCell align="right">{row.carbs}</TableCell>
                        
                        <TableCell align="right">{row.protein}</TableCell>
                        
                        <TableCell align="right">

                        <Typography gutterBottom>
                        Click to get the full Modal experience!
                        </Typography>

                        <Button onClick={() => {handleOpen(index);}}>{d.title}</Button>
                        
                        </TableCell>

                    </TableRow>

                    
                    ))}
                    <CustomModal/>
                    


                    </TableBody>
    )
}
export default SimpleTable