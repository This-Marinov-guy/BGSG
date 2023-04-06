import React, { Fragment, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  Elements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useHttpClient } from "../../hooks/http-hook";
import Loader from "./Loader";

const StripePayment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const { loading, sendRequest } = useHttpClient();

  const handleSubmit = () => {};

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
    <Fragment>
      <h1>Payment</h1>
      {stripePromise && clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <form id="payment-form" onSubmit={handleSubmit}>
            <button
              type="submit"
              className="rn-button-style--2 btn-solid mt--40"
            >
              Pay and unlock
            </button>
          </form>
        </Elements>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default StripePayment;
