import React from "react";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeWarning } from "../../redux/modal";

const Update = () => {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(removeWarning());
  };

  return (
    <Alert className="error_panel" variant="information">
      <div className="action_btns">
        <h3>Version update!</h3>
        <FiX className="mr--20" onClick={closeHandler} />
      </div>
      <p>
        There is an update available! Please close all your running tabs with
        this website and open it again!
      </p>
    </Alert>
  );
};

export default Update;
