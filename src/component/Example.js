import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';




const [selectcourse, setSelectCourse] = React.useState('');

          const handleChange = (event) => {

                  setSelectCourse(event.target.value);

           };


           <Box sx={{ minWidth: 240 }}>

           <FormControl fullWidth>
     
             <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
             <Select name="select"
               {...register('select')}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={selectcourse}
               label="Select Course"
               onChange={handleChange} error={errors.select? true : false } >
     
               <MenuItem value="BE">BE</MenuItem>
               <MenuItem value="BCS">BCS</MenuItem>
               <MenuItem value="B.Tech">B.Tech</MenuItem>
               <MenuItem value="BCA">BCA</MenuItem>
     
             </Select>
             <p>{errors.select?.message}</p> 
     
           </FormControl>
           </Box>