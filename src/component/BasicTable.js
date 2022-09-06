import React from "react";
import { IconButton, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme)=>({
    
    tableHeaderCell:{

        fontWeight: 'bold',
        backgroundColor: 'Purple',
        color: theme.palette.getContrastText(theme.palette.primary.light)
        
    },
    
}));

    
function BasicTable({userData, sendData}){

    const obj={
        
        firstName:'',
        lastName:'',
        gender:'',
        select:'',
        dateofBirth:'',
        email:'',
        password:'',
        confirmPassword:''
    }

      
  const classes = useStyles();

    return(
        <Box alignItems="center" >
        <TableContainer component={Paper} className={classes.tableContainer} >
            <h2>Student List</h2>
            <Table  className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >FirstName</TableCell>
                        <TableCell  align="center" className={classes.tableHeaderCell} >LastName</TableCell>
                        <TableCell  align="center" className={classes.tableHeaderCell} >Gender</TableCell>
                        <TableCell  align="center" className={classes.tableHeaderCell} >Course</TableCell>
                        <TableCell  align="center" className={classes.tableHeaderCell} >DOB</TableCell>
                        <TableCell  align="center" className={classes.tableHeaderCell} >Email</TableCell>
                        <TableCell  align="center" className={classes.tableHeaderCell} >Password</TableCell>
                        <TableCell  align="center" className={classes.tableHeaderCell} >confirm Password</TableCell>
                    
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                {userData.map((row) => (

                <TableRow key={row.name}>

              <TableCell  component="th" scope="row">{row.firstName}</TableCell>            
              <TableCell  align="center">{row.lastName}</TableCell>
              <TableCell  align="center">{row.gender}</TableCell>
              <TableCell  align="center">{row.select}</TableCell>
              <TableCell  align="center">{row.dateofBirth}</TableCell>
              <TableCell  align="center">{row.email}</TableCell>
              <TableCell  align="center">{row.password}</TableCell>
              <TableCell  align="center">{row.confirmPassword}</TableCell>

              <TableCell><Button color="primary" variant="outlined" onClick={()=>sendData(row)} >Edit</Button></TableCell>

            </TableRow>
          ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Box>
    );
}
export default BasicTable