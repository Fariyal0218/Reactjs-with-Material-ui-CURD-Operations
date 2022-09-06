import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton,InputAdornment,TextField} from "@mui/material";
import React,{useState} from "react";
import { Controller, useForm,FieldError} from "react-hook-form";
import * as yup from "yup";

function InputPassword(){

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowConfirmPassword = () =>
   
  setShowConfirmPassword(!showConfirmPassword);


    const Schema = yup.object().shape({

        password: yup.string().min(4).max(12).required(),


        });


        const  {register,control,formState: {errors}} = useForm ({
        
            mode: "onChange",
 
           resolver: yupResolver(Schema),
    
     });
return(

<div>
<Controller
  control={control}
  name="password"
  render={({ field: { value, onChange } }) => (
    <TextField
      name="password"
      label="Password"
      type={showPassword ? "text" : "password"}
      value={value}
      onChange={onChange}
      {...register("password")}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )}
/>


<p className="text-red-700">{errors.password?.message}</p>

</div>
)
}
export default InputPassword