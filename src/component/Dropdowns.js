import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

import Select from "react-select";
import "react-select/dist/react-select.css";
import Dropdown from "./Dropdown";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    topic: Yup.string()
      .ensure()
      .required("Topic is required!")
  }),
  mapPropsToValues: props => ({
    email: "",
    topic: ""
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topic: values.topic.value
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm"
});

const MyForm = props => {

  const {
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    setFieldTouched,
    isSubmitting
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: "block" }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{errors.email}</div>
      )}
      <MySelect
        value={values.topic}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.topic}
        touched={touched.topic}
      />
      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>

      <DisplayFormikState {...props} />
    </form>
  );
};

const options = [

  { value: "Food", label: "Food" },
  { value: "Being Fabulous", label: "Being Fabulous" },
  { value: "Ken Wheeler", label: "Ken Wheeler" },
  { value: "ReasonML", label: "ReasonML" },
  { value: "Unicorns", label: "Unicorns" },
  { value: "Kittens", label: "Kittens" }
];

class MySelect extends React.Component {
  handleChange = value => {
    this.props.onChange("topic", value);
  };

  handleBlur = () => {

    this.props.onBlur("topic", true);
  };

  render() {
    return (
      <div style={{ margin: "1rem 0" }}>
        <label htmlFor="color">Topic</label>
        <Select
          id="color"
          options={options}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.props.value}
        />
        {!!this.props.error && this.props.touched && (
          <div style={{ color: "red", marginTop: ".5rem" }}>
            {this.props.error}
          </div>
        )}
      </div>
    );
  }
}
export default Dropdowns