import React from "react";
import { useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import Spinner from "react-bootstrap/Spinner";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return <Spinner
                className="center_div"
                variant="danger"
                as="span"
                animation="border"
                size="m"
                role="status"
                aria-hidden="true"
            />;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${window.location.origin}/donation/success`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occured.");
        }

        setIsProcessing(false);
    };

    return (
        <form className="payment_form" id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <button disabled={isProcessing || !stripe || !elements} id="submit" className="rn-button-style--2 btn-solid mt--40"
            >
                <span id="button-text">
                    {isProcessing ? "Processing ... " : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
}

export default CheckoutForm