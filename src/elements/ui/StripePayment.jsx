import React, { Fragment, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow";
import CheckoutForm from "./CheckoutForm";
import { FiX } from "react-icons/fi";

const StripePayment = (props) => {
  const appearance = {
    theme: "stripe",
  };

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const { sendRequest } = useHttpClient();

  const closeHandler = () => {
    props.cancel();
  };

  useEffect(() => {
    const config = async () => {
      try {
        const responseData = await sendRequest(`payment/configure`);
        const promise = await loadStripe(responseData.publishableKey);
        setStripePromise(promise);
      } catch (err) {
        console.log(err);
      }
    };
    config();
  }, []);

  useEffect(() => {
    const loadPayment = async () => {
      try {
        const responseData = await sendRequest(
          `payment/create-payment-intent`,
          "POST",
          JSON.stringify({
            amount: 1,
            email: "vlady1002@abv.bg",
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setClientSecret(responseData.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    loadPayment();
  }, []);

  return (
    <ModalWindow static="static" show={props.show}>
      <div style={{ padding: "40px" }} className="center_section">
        <h1>Payment</h1>
        <FiX className="x_icon" onClick={closeHandler} />
        {stripePromise && clientSecret ? (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret, appearance }}
          >
            <CheckoutForm onSuccess={props.onSuccess} />
          </Elements>
        ) : (
          <Loader />
        )}
      </div>
    </ModalWindow>
  );
};

export default StripePayment;
