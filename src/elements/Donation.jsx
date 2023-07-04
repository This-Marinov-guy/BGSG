import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";
import Modal from "react-bootstrap/Modal";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { removeDonation, selectDonation } from "../redux/donation";
import { useHttpClient } from "../hooks/http-hook";

const Donation = () => {
    const donation = useSelector(selectDonation)
    const dispatch = useDispatch()

    const { sendRequest } = useHttpClient();

    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch(process.env.REACT_APP_TEST_SERVER_URL + "payment/donation/config").then(async (r) => {
            const { publishableKey } = await r.json();
            setStripePromise(loadStripe(publishableKey));
        });
    }, []);

    useEffect(() => {
        fetch(process.env.REACT_APP_TEST_SERVER_URL + "payment/donation/create-payment-intent", {
            method: "POST",
            body: JSON.stringify({}),
        }).then(async (result) => {
            var { clientSecret } = await result.json();
            setClientSecret(clientSecret);
        });
    }, []);

    return (
        <Modal
            show={donation}
            onHide={() => dispatch(removeDonation())}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <>
                <h1>React Stripe and the Payment Element</h1>
                {clientSecret && stripePromise && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <Checkout />
                    </Elements>
                )}
            </>
        </Modal>
    )
}

export default Donation;



