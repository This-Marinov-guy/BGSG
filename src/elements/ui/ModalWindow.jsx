import React from "react";
import Modal from "react-bootstrap/Modal";

const ModalWindow = (props) => {
  
  if (props.freeze) {
    window.onscroll = function () {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  }

  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      freeze={props.freeze}
    >
      {props.children}
    </Modal>
  );
};

export default ModalWindow;
