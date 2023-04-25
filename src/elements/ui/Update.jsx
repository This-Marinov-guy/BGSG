import React from "react";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeWarning, selectWarning } from "../../redux/modal";
import Modal from "react-bootstrap/Modal";

import packageJson from "../../../package.json";

const Update = () => {
  const dispatch = useDispatch();

  const warning = useSelector(selectWarning);

  const closeHandler = () => {
    dispatch(removeWarning());
  };

  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      show={warning}
    >
      <Alert className="error_panel" variant="info">
        <div className="action_btns">
          <h3>{"Version update  " + packageJson.version + " !"}</h3>
          <FiX className="x_icon" onClick={closeHandler} />
        </div>
        <p>
          Your website is outdated! Please close all your running tabs with this
          website and open it again!
        </p>
      </Alert>
    </Modal>
  );
};

export default Update;
