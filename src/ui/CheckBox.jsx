import React from "react";

const CheckBox = (props) => {
  return (
    <div className="hor_section_nospace mb--20">
      <input
        style={{ maxWidth: "30px", margin: "10px" }}
        type="checkbox"
      ></input>
      <p className="information">{props.text}</p>
    </div>
  );
};

export default CheckBox;
