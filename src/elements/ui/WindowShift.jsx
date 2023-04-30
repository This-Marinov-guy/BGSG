import React, { useState } from "react";

const WindowShift = (props) => {
  const [window, setWindow] = useState(props.main);

  return (
    <div className={`container ${props.className}`}>
      <div className="options-btns-div">
        <button
          className={
            window === props.main
              ? "rn-button-style--2 btn-solid option-btn"
              : "rn-button-style--2 rn-btn-reverse option-btn"
          }
          onClick={() => {
            setWindow(props.main);
          }}
        >
          {props.main}
        </button>
        <button
          className={
            window === props.secondary
              ? "rn-button-style--2 btn-solid option-btn"
              : "rn-button-style--2 rn-btn-reverse option-btn"
          }
          onClick={() => {
            setWindow(props.secondary);
          }}
        >
          {props.secondary}
        </button>
      </div>
      {window === props.main ? props.mainContent : props.secondaryContent}
    </div>
  );
};

export default WindowShift;
