import React from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { selectModal } from "../../redux/modal";

const ModalWindow = (props) => {
  const modal = useSelector(selectModal);
  
  return (
    <Modal
      show={modal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop={props.static}
      centered
    >
      {props.children}
    </Modal>
  );
};

export default ModalWindow;
