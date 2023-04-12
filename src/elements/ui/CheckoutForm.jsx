import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { showError } from "../../redux/error";

const CheckoutForm = (props) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
    });
  };

  return (
    <form id="payment-form" className="center_section" onSubmit={handleSubmit}>
      <p className="information">Invoice Email: {props.invoiceEmail}</p>
      <PaymentElement />
      <button
        type="submit"
        disabled={isProcessing || !stripe || !elements}
        className="rn-button-style--2 btn-solid mt--40"
      >
        {isProcessing ? "Processing..." : "Pay now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
