import React from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { selectWarning } from "../../redux/modal";
import Modal from "react-bootstrap/Modal";

import packageJson from "../../../package.json";

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
          <h3>"Version update!"</h3>
        </div>
        <p>
          {`Your website version ${packageJson.version} is outdated! Please close
          all your running tabs with this website and open it again!`}
        </p>
      </Alert>
    </Modal>
  );
};

export default Update;
