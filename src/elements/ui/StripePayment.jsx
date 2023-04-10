import React, { Fragment, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow";
import InjectedCheckoutForm from "./CheckoutForm";
import { FiX } from "react-icons/fi";
import StripeCheckout from "react-stripe-checkout";
import CheckoutForm from "./CheckoutForm";

const StripePayment = (props) => {
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
        setStripePromise(loadStripe(responseData.publishableKey));
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

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <ModalWindow static="static" show={true}>
      <div style={{ padding: "40px" }} className="center_section">
        <h1>Payment</h1>
        <FiX className="x_icon" onClick={closeHandler} />
        {stripePromise && clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm  />
          </Elements>
        ) : (
          <Loader />
        )}
      </div>
    </ModalWindow>
  );
};

export default StripePayment;
