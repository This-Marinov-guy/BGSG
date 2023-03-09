import React from "react";

const Select = (props) => {
  return (
    <div className="rnform-group">
      <select
        value={props.value}
        isValid={props.isValid}
        isInvalid={props.isInvalid}
        touched={props.touched}
        errorMessage={props.errorMessage}
        onChange={props.onChange}
      >
        <option value="" disabled selected>
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
      {props.errorMessage && props.touched && (
        <p style={{ color: "#f80707" }} className="information">
          {props.errorMessage}
        </p>
      )}
    </div>
  );
};

export default Select;
