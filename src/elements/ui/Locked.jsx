import React from "react";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow";

const Locked = (props) => {
  const { loading, sendRequest } = useHttpClient();

  return (
    <ModalWindow static="static" show={props.show} freeze>
      <div style={{ padding: "40px" }} className="center_section">
        <h2>Your account is locked</h2>
        <p className="center_text">
          To continue using the benefits of a member please pay the fee
          subscription for the following semester! Otherwise, log out of your
          account.
        </p>
        {loading ? (
          <Loader />
        ) : (
          <button
            onClick={() => {}}
            className="rn-button-style--2 btn-solid mt--40"
          >
            Pay and unlock
          </button>
        )}
        <a href="/" className="rn-button-style--2 rn-btn-green mt--40">
          Back to Home
        </a>
      </div>
    </ModalWindow>
  );
};

export default Locked;
