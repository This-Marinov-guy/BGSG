import React, { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { showError } from "../../redux/error";
import { removeModal } from "../../redux/modal";

const CheckoutForm = () => {
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

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
    });

    dispatch(removeModal());

    if (error) {
      dispatch(showError(error.message));
    }
    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        type="submit"
        disabled={isProcessing}
        className="rn-button-style--2 btn-solid mt--40"
      >
        {isProcessing ? "Processing..." : "Pay now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
