import React from "react";
import { Box, Button, TextField, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";
import { Controller } from "react-hook-form";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";



function SignupForm(props) {

    const schema = yup.object().shape({
    
        dateOfBirth: yup .string().nullable().test("dateOfBirth", "You must be 18 years or older", function (value) {
            return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
          }).required("Please enter your age")

      });

            const { handleSubmit, control } = useForm({
            resolver: yupResolver(schema)
     });
             const submitForm = (data) => {
                  console.log(data); 
            };

  return (
    <Container maxWidth="xs">
      <Box>
        <form
          noValidate
          onSubmit={handleSubmit(submitForm)}
          className="signup-form"
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue={null}
              render={({
                field: { onChange, value },
                fieldState: { error, invalid }
              }) => (
                <DatePicker
                  label="Date of birth"
                  disableFuture
                  value={value}
                  onChange={(value) =>
                    onChange(moment(value).format("YYYY-MM-DD"))
                  }
                  renderInput={(params) => (
                    console.log(invalid),
                    (
                      <TextField
                        error={invalid}
                        helperText={invalid ? error.message : null}
                        id="dateOfBirth"
                        variant="standard"
                        margin="dense"
                        fullWidth
                        color="primary"
                        autoComplete="bday"
                        {...params}
                      />
                    )
                  )}
                />
              )}
            />
          </LocalizationProvider>
          <Button
            color="primary"
            variant="contained"
            type="submit"
            sx={{ mt: 5 }}
          >
            SUBMIT
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SignupForm
