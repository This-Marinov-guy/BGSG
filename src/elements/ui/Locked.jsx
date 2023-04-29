import React from "react";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showError } from "../../redux/error";

const Locked = (props) => {
  const { loading, sendRequest } = useHttpClient();

  const userId = useParams().userId;

  const dispatch = useDispatch();

  const handleUnlock = async () => {
    if (!userId) {
      dispatch(showError("User cannot be found, please try again"));
      return;
    }
    try {
      const responseData = await sendRequest(
        "payment/checkout-no-file",
        "POST",
        JSON.stringify({
          itemId: "price_1N0LPvIOw5UGbAo12uU6bUpm",
          origin_url: window.location.origin,
          method: "unlock_account",
          userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      if (responseData.url) {
        window.location.assign(responseData.url);
      }
    } catch (err) {}
  };

  return (
    <ModalWindow static="static" show={props.show} freeze>
      <div style={{ padding: "40px" }} className="center_section">
        <h2>
          {props.case === "locked"
            ? "Your account is locked!"
            : "Your account is suspended!"}
        </h2>
        <p className="center_text">
          {props.case === "locked"
            ? "To continue using the benefits of a member please pay the fee subscription for the following semester! Otherwise, log out of your account."
            : "We have noticed some violation from your side. Unfortunately, we will need to block your account until further notice. Please contact: bulgariansociety.gro@gmail.com "}
        </p>
        {props.case === "locked" && (
          <button
            disabled={loading}
            onClick={handleUnlock}
            className="rn-button-style--2 btn-solid mt--40"
          >
            {loading ? <Loader /> : <span>Proceed to paying</span>}
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
