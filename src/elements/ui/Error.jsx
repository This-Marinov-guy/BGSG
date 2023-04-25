import React from "react";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeError } from "../../redux/error";

const Error = (props) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(removeError());
  };

  return (
    <Alert
      className="error_panel"
      variant="danger"
    >
      <div className="action_btns">
        <h3>Be careful - You just got an error!</h3>
        <FiX className="x_icon" onClick={closeHandler}/>
      </div>
      <p>
      {props.errorMessage}
      </p>
    </Alert>
  );
};

export default Error;
