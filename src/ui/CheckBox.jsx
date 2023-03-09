import React, { Fragment } from "react";
import { Field } from "formik";

const CheckBox = (props) => {
  return (
    <Fragment>
      <div className="hor_section_nospace mt--40">
        <Field
          style={{ maxWidth: "30px", margin: "10px" }}
          type="checkbox"
          value={props.value}
          isinvalid={props.isInvalid}
          touched={props.touched}
          errormessage={props.errorMessage}
          onChange={props.onChange}
        ></Field>
        <p className="information">{props.text}</p>
      </div>
      {props.errorMessage && props.touched && (
        <p style={{ color: "#f80707" }} className="information">
          {props.errorMessage}
        </p>
      )}
    </Fragment>
  );
};

export default CheckBox;
