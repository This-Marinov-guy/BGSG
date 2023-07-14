import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "react-bootstrap/Modal";
import Loader from "../elements/ui/Loader";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { removeDonation, selectDonation } from "../redux/donation";
import { useHttpClient } from "../hooks/http-hook";

const schema = yup.object().shape({
    name: yup.string(),
    amount: yup.number().positive("Please insert a positive amount").min(2, 'Minimum Amount is 2 euro')
        .required("Please insert an amount"),
    comments: yup.string()
});

const Donation = () => {
    const donation = useSelector(selectDonation)
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [stripePromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");

    return (
        <Modal
            show={donation}
            onHide={() => dispatch(removeDonation())}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="payment bg_color--1">
                <h2>Your contribution helps us develop!</h2>
                <h3 style={{ marginTop: "-15px" }}>Thank you</h3>
                {(clientSecret && stripePromise ? <Elements stripe={stripePromise} options={{ clientSecret }} >
                    <CheckoutForm />
                </Elements> : <Formik
                    className="inner"
                    style={{ display: 'flex' }}
                    validationSchema={schema}
                    onSubmit={async (values) => {
                        try {
                            fetch(process.env.REACT_APP_TEST_SERVER_URL + "payment/donation/config").then(async (r) => {
                                const { publishableKey } = await r.json();
                                setStripePromise(loadStripe(publishableKey));
                            });
                            fetch(process.env.REACT_APP_TEST_SERVER_URL + "payment/donation/create-payment-intent", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    name: values.name,
                                    amount: values.amount,
                                    comments: values.comments
                                }),

                            }).then(async (result) => {
                                var { clientSecret } = await result.json();
                                setClientSecret(clientSecret);
                            });
                            setLoading(true)
                        } catch (err) {
                        }
                    }}
                    initialValues={{
                        name: '',
                        amount: '',
                        comments: '',
                    }}
                >
                    {() => (
                        <Form
                            id="form"
                            className="payment"
                            style={{ padding: "2%" }}
                        >
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="rnform-group">
                                        <Field
                                            type="text"
                                            placeholder="Name (optional)"
                                            name="name"
                                        ></Field>
                                        <ErrorMessage
                                            className="error"
                                            name="name"
                                            component="div"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="rnform-group">
                                        <div className="input-container">
                                            <Field
                                                type="number"
                                                step="0.5"
                                                placeholder="Amount in EUR"
                                                name="amount"
                                                inputMode="numeric"
                                                min="2"
                                            ></Field>
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="amount"
                                            component="div"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-12 mt--40">
                                    <div className="rnform-group">
                                        <Field
                                            style={{ padding: '1% 0 0 3%' }}
                                            as='textarea'
                                            placeholder="Message to be sent to us (optional)"
                                            name="comments"
                                        ></Field>
                                        <ErrorMessage
                                            className="error"
                                            name="comments"
                                            component="div"
                                        />
                                    </div>
                                </div>

                            </div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="rn-button-style--2 btn-solid mt--40"
                            >
                                {loading ? <Loader /> : <span>Continue the payment</span>}
                            </button>

                        </Form>
                    )}
                </Formik>
                )}
            </div>
        </Modal >
    )
}

export default Donation;



