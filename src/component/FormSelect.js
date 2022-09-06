import React from "react";
import { Grid, TextField, Select, MenuItem, Typography, InputLabel, FormControl, Button} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
  

function FormSelect(){
    
  const useStyles = makeStyles((theme) => ({}));

  
    const classes=useStyles();

    const{register,control,handleSubmit}=useForm();

    const handleChange=()=>{
        console.log("event");
    };

    const onSubmit=(values)=>{
        console.log(values);
    };

    return(
        <>
        <Grid conatiner spacing={3}>
            <Grid item conatiner>

                <Typography variant="h4">Records</Typography>

            </Grid>

            <Grid item xs={12} sm={6} md={3}>
               <form onSubmit={handleSubmit(onSubmit)}>
                   <Grid conatiner direction="column" spacing={2}>
                    <Grid item>
                        <FormControl fullwidth variant="outlined" className={classes.FormControl}>
                        <InputLabel id="demo-simple-select-label">
                            Folder Name
                        </InputLabel>
                        <Controller control={control}
                        name="folderSelect"
                        onChange={()=>console.log("hellow")}
                        defaultValue=""
                        render={({onChange,value,onBlur,name})=>(
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={onChange}
                            value={value?value :""}
                            name={name}
                            >
                        <MenuItem value="Invoices" key="Invoices">
                            Invoices
                        </MenuItem>

                        <MenuItem value="Statements" key="Statements">
                        Statements
                        </MenuItem>
                        <MenuItem value="Credits" key="Credits">
                            Credits
                        </MenuItem>
                            </Select>
                        )}

                        />

                        </FormControl>
                    </Grid>

                    <Grid item>
                        <TextField fullwidth label="First Name"
                        name="firstName"
                        variant="outlined"
                        onChange={(e)=>console.log(e.target.value)}
                        inputRef={register({required:true})}
                        />
                    </Grid>
                    <Button type="submit">Submit</Button>
                   </Grid>
                </form> 
            </Grid>
        </Grid>
        </>
    );
}
export default FormSelect