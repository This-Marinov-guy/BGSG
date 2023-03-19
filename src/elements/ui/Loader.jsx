import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Spinner
      variant="danger"
      as="span"
      animation="border"
      size="m"
      role="status"
      aria-hidden="true"
    />
  );
};

export default Loader;
