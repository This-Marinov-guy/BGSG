import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { selectWarning } from "../../redux/modal";
import Modal from "react-bootstrap/Modal";

const Update = () => {
  const warning = useSelector(selectWarning);

  window.onscroll = function () {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Modal
      show={warning}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Alert className="error_panel" variant="info">
        <div className="action_btns">
          <h3>Version update!</h3>
        </div>
        <p>the website is being updated please close it or refresh the page</p>
      </Alert>
    </Modal>
  );
};

export default Update;
