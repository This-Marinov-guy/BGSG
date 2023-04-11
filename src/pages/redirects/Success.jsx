import React from "react";
import Alert from "react-bootstrap/Alert";

const Success = (props) => {
  return (
    <Alert style={{ margin: "50px" }} variant="success">
      <Alert.Heading>Payment is Successful!</Alert.Heading>
      <p>
        Your payment was unsuccessful! Please find your receipt in your email!
      </p>
      <a className="rn-button-style--2 rn-btn-green mt--40" href="/">
        Home
      </a>
      <hr />
      <p className="mb-0">
        If you have been additionally charged or you face problems, do not
        hesitate to contact us!
      </p>
    </Alert>
  );
};

export default Success;
