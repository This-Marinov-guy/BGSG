import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Spinner
      className="center_div"
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
