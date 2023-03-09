import React, { Fragment } from "react";

const CheckBox = (props) => {
  return (
    <Fragment>
      <div className="hor_section_nospace mb--20">
        <input
          style={{ maxWidth: "30px", margin: "10px" }}
          type="checkbox"
          value={props.value}
          isValid={props.isValid}
          isInvalid={props.isInvalid}
          touched={props.touched}
          errorMessage={props.errorMessage}
          onChange={props.onChange}
        ></input>
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
