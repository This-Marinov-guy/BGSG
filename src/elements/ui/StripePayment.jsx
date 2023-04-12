import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "./Loader";
import ModalWindow from "./ModalWindow";
import { FiX } from "react-icons/fi";
import CheckoutForm from "./CheckoutForm";

const StripePayment = (props) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [invoiceEmail, setInvoiceEmail] = useState("");
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
            //in cents
            amount: props.amount,
            email: props.invoiceEmail,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        setClientSecret(responseData.clientSecret);
        setInvoiceEmail(responseData.invoiceEmail);
      } catch (err) {
        console.log(err);
      }
    };
    loadPayment();
  }, []);

  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <ModalWindow static="static" show={true}>
      <div style={{ padding: "40px" }} className="center_section">
        <h1>Payment</h1>
        <FiX className="x_icon" onClick={closeHandler} />
        {stripePromise && clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm
              invoiceEmail={invoiceEmail}
              clientSecret={clientSecret}
            />
          </Elements>
        ) : (
          <Loader />
        )}
      </div>
    </ModalWindow>
  );
};

export default StripePayment;
