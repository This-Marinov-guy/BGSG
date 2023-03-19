import React from "react";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeError } from "../../redux/error";

const Error = () => {
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
        <h3>Be careful</h3>
        <FiX style={{marginRight:'20px'}} onClick={closeHandler}/>
      </div>
      <p>
        Change this and that and try again. Duis mollis, est non commodo luctus,
        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
        consectetur purus sit amet fermentum.
      </p>
    </Alert>
  );
};

export default Error;
