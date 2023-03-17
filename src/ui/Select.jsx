import React from "react";
import { Field } from "formik";

const Select = (props) => {
  return (
    <div className="rnform-group">
      <Field
        as="select"
        value={props.value}
        isvalid={props.isValid}
        isinvalid={props.isInvalid}
        touched={props.touched}
        errormessage={props.errorMessage}
        onChange={props.onChange}
      >
        <option value="" disabled selected>
          {props.placeholder}
        </option>
        {props.options.map((option, i) => {
          return <option key={i} value={option}>{option}</option>;
        })}
      </Field>
      {props.errorMessage && props.touched && (
        <p style={{ color: "#f80707" }} className="information">
          {props.errorMessage}
        </p>
      )}
    </div>
  );
};

export default Select;
