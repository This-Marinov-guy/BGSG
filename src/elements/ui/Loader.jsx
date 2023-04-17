import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="hor_section_nospace">
    <span style={{marginRight:"10px"}}>Processing </span>
      <Spinner
        className="center_div"
        variant="danger"
        as="span"
        animation="border"
        size="s"
        role="status"
        aria-hidden="true"
      />
    </div>
  );
};

export default Loader;
