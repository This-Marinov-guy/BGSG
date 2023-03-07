import React from "react";

const Select = (props) => {
  return (
    <select>
      <option value="" disabled selected>
        {props.placeholder}
      </option>
      {props.options.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
