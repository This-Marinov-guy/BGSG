import React from "react";

const Input = (props) => {
  return (
    <div className="rnform-group">
      <input
        type={props.text}
        placeholder={props.placeholder}
        value={props.value}
        isValid={props.isValid}
        isInvalid={props.isInvalid}
        touched={props.touched}
        errorMessage={props.errorMessage}
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
