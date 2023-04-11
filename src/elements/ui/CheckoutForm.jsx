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

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
      redirect: "if_required",
    });

    if (error) {
      console.log(error.message);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("successs");
    } else {
      console.log("Fail");
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
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

// import React, { useState, useEffect } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import { useHttpClient } from "../../hooks/http-hook";

// export default function CheckoutForm() {
//   const { sendRequest } = useHttpClient();

//   const [succeeded, setSucceeded] = useState(false);
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState("");
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState("");
//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     const loadPayment = async () => {
//       try {
//         const responseData = await sendRequest(
//           `payment/create-payment-intent`,
//           "POST",
//           JSON.stringify({
//             amount: 1,
//             email: "vlady1002@abv.bg",
//           }),
//           {
//             "Content-Type": "application/json",
//           }
//         );
//         setClientSecret(responseData.clientSecret);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     loadPayment();
//   }, []);

//   const cardStyle = {
//     style: {
//       base: {
//         color: "#32325d",
//         fontFamily: "Arial, sans-serif",
//         fontSmoothing: "antialiased",
//         fontSize: "16px",
//         "::placeholder": {
//           color: "#32325d",
//         },
//       },
//       invalid: {
//         fontFamily: "Arial, sans-serif",
//         color: "#fa755a",
//         iconColor: "#fa755a",
//       },
//     },
//   };

//   const handleChange = async (event) => {
//     // Listen for changes in the CardElement
//     // and display any errors as the customer types their card details
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement),
//       },
//     });

//     if (payload.error) {
//       setError(`Payment failed ${payload.error.message}`);
//       setProcessing(false);
//     } else {
//       setError(null);
//       setProcessing(false);
//       setSucceeded(true);
//     }
//   };

//   return (
//     <form id="payment-form" onSubmit={handleSubmit}>
//       <CardElement
//         id="card-element"
//         options={cardStyle}
//         onChange={handleChange}
//       />
//       <button disabled={processing || disabled || succeeded} id="submit">
//         <span id="button-text">
//           {processing ? (
//             <div className="spinner" id="spinner"></div>
//           ) : (
//             "Pay now"
//           )}
//         </span>
//       </button>
//       {/* Show any error that happens when processing the payment */}
//       {error && (
//         <div className="card-error" role="alert">
//           {error}
//         </div>
//       )}
//       {/* Show a success message upon completion */}
//       <p className={succeeded ? "result-message" : "result-message hidden"}>
//         Payment succeeded, see the result in your
//         <a href={`https://dashboard.stripe.com/test/payments`}>
//           {" "}
//           Stripe dashboard.
//         </a>{" "}
//         Refresh the page to pay again.
//       </p>
//     </form>
//   );
// }
