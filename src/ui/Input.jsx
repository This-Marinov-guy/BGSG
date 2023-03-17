import React from "react";
import { Field } from "formik";

const Input = (props) => {
  return (
    <div className="rnform-group">
      <Field
        type={props.text}
        placeholder={props.placeholder}
        value={props.value}
        isvalid={props.isValid}
        isinvalid={props.isInvalid}
        touched={props.touched}
        errormessage={props.errorMessage}
        onChange={props.onChange}
      />
      {props.errorMessage && props.touched && (
        <p style={{ color: "#f80707" }} className="information">
          {props.errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
