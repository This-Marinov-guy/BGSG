import React from "react";
import Alert from "react-bootstrap/Alert";

const Fail = () => {
  return (
    <Alert
      className="center_section"
      style={{ margin: "50px" }}
      variant="danger"
    >
      <h2 className="mb--40">Payment Error</h2>
      <p>
        Unfortunately, your payment was unsuccessful and you were NOT charged!
        If you need any help with the payment, please contact us!
      </p>
      <a className="rn-button-style--2 btn-solid mt--40" href="/">
        Home
      </a>
    </Alert>
  );
};

export default Fail;
