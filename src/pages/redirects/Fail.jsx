import React from "react";
import Alert from "react-bootstrap/Alert";

const Fail = () => {
  return (
    <Alert style={{margin:"50px"}} variant="danger">
      <Alert.Heading>Payment Error</Alert.Heading>
      <p>
        Unfortunately, your payment was unsuccessful! Please try again from the
        home page
      </p>
      <a className="rn-button-style--2 btn-solid mt--40" href="/">Home</a>
      <hr />
      <p className="mb-0">
        If you have been charged or you face problems, do not hesitate to
        contact us!
      </p>
    </Alert>
  );
};

export default Fail;
