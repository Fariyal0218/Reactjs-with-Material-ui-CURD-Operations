import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const SignupSchema = yup.object().shape({
 
    select: yup.string().required()

});

function Dropdown() {

  const { register, setValue, handleSubmit, formState: { errors }} = useForm({
   
    mode: "onChange",
    
    resolver: yupResolver(SignupSchema)
 
});
  
const onSubmit = (data) => {
    
    alert(JSON.stringify(data));
 
};

  const doSomething = async (value) => {

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Select</label>
        <select
          {...register("select")}
          onChange={(e) => setValue('select', e.target.value, { shouldValidate: true })} 
        >
          <option value="">Null</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        {errors.select && <p>{errors.select.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}
export default Dropdown

