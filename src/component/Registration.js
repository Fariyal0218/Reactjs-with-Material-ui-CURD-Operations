import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";
import './style.css'
import { Box } from "@mui/system";
import { Container,FormControlLabel,FormLabel,Grid, RadioGroup, TextField,Radio,Button,Checkbox,FormGroup, } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment";
import { Controller } from "react-hook-form";
import BasicTable from "./BasicTable";


const Registration = () =>{

    
    const Schema = yup.object().shape({

        firstName: yup.string().required('First Name is required'),

        lastName: yup.string().required('LastName is required'),

        gender:yup.string().required('select the gender'),

        select: yup.string().required('please select one course'),

        dateofBirth : yup.string().nullable().required('Date of Birth is required'),
      
        email: yup.string() .required('Email is required').email('Email is invalid'),

        password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
       
          confirmPassword: yup.string().required('Confirm Password is required')
          .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
       
          acceptTerms: yup.bool().oneOf([true], 'Accept Terms is required')
      
        });

        const courses =[

          {
            value:'BE',
            label:'BE',
          },

          {
            value: 'BCS',
            label:'BCS',
          },

          {
            value: 'B.Tech',
            label: 'B.Tech'
          },
          {
            value: 'BCA',
            label: 'BCA',
          }


        ];


      const  {register ,setCourse,setValue,handleSubmit,control,formState: {errors},reset} = useForm ({
        
           mode: "onChange",

          resolver: yupResolver(Schema),
   
    });


    const[userData,setUserData]=React.useState([])


    const onSubmit = (data) => {

        console.log(data);
        setUserData([...userData,data])
        reset();

    };

    const displayData=(data)=>{
      console.log(data);
    }

    const sendData=(userObj)=>{
        console.log("hiiiii",userObj);

        const fields=[
        'firstName',
        'lastName',
        'gender',
        'select',
        'dateofBirth',
        'email',
        'password',
        'confirmPassword',
        'acceptTerms'
    ]

        fields.forEach(field=>

          {setValue(field,userObj[field])}

          )
        
      
    }

    
    return(
      
      <div id="main-container" >
        <center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
          <h2>Register Here</h2>
         <Box sx={{ width: '100%'}} >

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">

        <Grid item xs={6} mt={2} >

         <TextField multiline rows={1} fullWidth  margin="normal"
             name="firstName" type="text" 
             variant="outlined" label="First Name" 
             placeholder="First Name"
          {...register('firstName')} error={errors.firstName ? true : false }/>

         <p style={{color:'red'}}>{errors.firstName?.message}</p>

         </Grid>


        <Grid item xs={6} mt={2}>

        <TextField multiline rows={1} fullWidth margin="normal" name="lastName" type="text" 
        variant="outlined" label="Last Name"  placeholder="Last Name" 
        {...register('lastName')} error={errors.lastName? true : false }
       />
        
        <p style={{color:'red'}}>{errors.lastName?.message}</p>

        </Grid>
      
        

      <Grid item xs={6} mt={1}>

      <FormControl>

      <FormLabel id="demo-row-radio-buttons-group-label">Gender : </FormLabel>

      <RadioGroup row 
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      fullWidth margin="normal" variant="outlined" >



      <FormControlLabel  value="Female" {...register("gender", { required: true })} control={<Radio/>} label="Female" />

      
      <FormControlLabel   value="Male" {...register("gender", { required: true })} control={<Radio/>} label="Male" />


      </RadioGroup>
      </FormControl>
      </Grid>
     
        <Grid item xs={6}>
            <TextField multiline rows={1} fullWidth margin="normal" 
            id="outlined-select-course"
            {...register('select')}
            select
            label="Select Course"
            placeholder="Select Course"
            name="select"
            value={setCourse} 
            onChange={(e)=>setCourse('select', e.target.value,{shouldValidate: true})} >

            {courses.map((option)=>(

                <MenuItem key={option.value} value={option.value}>

                  {option.label}

                </MenuItem>

              ))}

            </TextField>
            
            {errors.select && <p style={{color:'red'}}>{errors.select.message}</p>}
            
        
        </Grid>


          
        <Grid item xs={6}  mt={2}>
 
           
        <LocalizationProvider dateAdapter={AdapterDateFns}>
         <Controller 
         name="dateofBirth"
         control={control}
         defaultValue={null}
         render={({
           field: {onChange, value},
           fieldState: {error,invalid}

         })=>(

          <DatePicker
          label="Date-of-Birth " margin="normal"
          multiline rows={1} fullWidth
          disableFuture 
          value={value} 
          onChange={(value)=>
            onChange(moment(value).format("YYYY-MM-DD"))
            
          }

          renderInput={(params) => (
            
          <TextField 
          error={invalid}
          // helperText={invalid ? error.message : null}
          id="dateofBirth"
          {...params} 
         
          />
            
         )}
        />
        )}
        />
        </LocalizationProvider>   

        <p style={{color:'red'}}>{errors.dateofBirth?.message}</p>

           </Grid>


          <Grid item xs={6}>

          <TextField multiline rows={1} fullWidth name="email" type="text" margin="normal" 
          placeholder="Email" label="Email" {...register('email')} error={errors.email ? true : false}  /> 
        
         <p style={{color:'red'}}>{errors.email?.message}</p>

         </Grid>

          <Grid item xs={6}>

          <TextField multiline rows={1} fullWidth  name="password" type="password" margin="normal"
           placeholder="Password" label="Password" {...register('password')}  error={errors.password ? true : false} />
         
          
          <p style={{color:'red'}}>{errors.password?.message}</p>

          </Grid>

          <Grid item xs={6}>
          <TextField multiline rows={1} fullWidth name="confirmPassword" type="password" margin="normal"
           placeholder="Confirm Password" label="Confirm Password" {...register('confirmPassword')} error={errors.confirmPassword ? true : false } />
          
          <p style={{color:'red'}}>{errors.confirmPassword?.message}</p>

          </Grid>

         
          <FormGroup>

          <FormControlLabel name="acceptTerms" control={<Checkbox  />} label="I have read and agree to the Terms" 
          value="" {...register('acceptTerms')}  error={errors.acceptTerms? true : false } />

              <p style={{color:'red'}}>{errors.acceptTerms?.message}</p>
              
          </FormGroup>

            
            </Grid>
            </Box>

            <Button  variant="contained" color="primary" type="submit"
            style={{ margin: "1rem" }} sx={{fontSize : "20px"}}>Register</Button>

            <Button type="button" onClick={()=> reset()} variant="contained" color="secondary" style={{ margin: "1rem" }} sx={{fontSize : "20px"}} >Reset</Button>

            </Container>
            
            </form>
            </center>

            <BasicTable userData={userData} sendData={sendData}/>
            </div>

    )
}

export default Registration