import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "react-bootstrap/Modal";
import Loader from "../elements/ui/Loader";
import CheckoutForm from "./CheckoutForm";
import { FiX } from "react-icons/fi";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { removeDonation, selectDonation } from "../redux/donation";
import { useHttpClient } from "../hooks/http-hook";

const schema = yup.object().shape({
    name: yup.string(),
    amount: yup.string().required("Please insert an amount"),
    comments: yup.string()
});

const Donation = () => {
    const donation = useSelector(selectDonation)
    const dispatch = useDispatch()

    const { sendRequest, loading } = useHttpClient();

    const [showPaymentForm, setShowPAymentForm] = useState(true)
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
            <div className="payment bg_color--1">
                <div className="hor_section">
                    <h2>Donation</h2>
                    <FiX className="x_icon" onClick={() => dispatch(removeDonation())} />
                </div>
                {(clientSecret && stripePromise && !showPaymentForm ? <Elements stripe={stripePromise} options={{ clientSecret }} >
                    <CheckoutForm />
                </Elements> : <Formik
                    className="inner"
                    validationSchema={schema}
                    onSubmit={async (values) => {
                        try {
                            fetch(process.env.REACT_APP_TEST_SERVER_URL + "payment/donation/config").then(async (r) => {
                                const { publishableKey } = await r.json();
                                setStripePromise(loadStripe(publishableKey));
                            });
                        } catch (err) {
                        }
                        try {
                            fetch(process.env.REACT_APP_TEST_SERVER_URL + "payment/donation/create-payment-intent", {
                                method: "POST",
                                body: JSON.stringify({
                                    amount: values.amount
                                }),
                            }).then(async (result) => {
                                var { clientSecret } = await result.json();
                                setClientSecret(clientSecret);
                            });
                            setShowPAymentForm(false)
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
                            style={{ padding: "2%" }}
                        >
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="rnform-group">
                                        <Field
                                            type="text"
                                            placeholder="Name"
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
                                        <Field
                                            type="number"
                                            placeholder="Amount in EUR"
                                            name="amount"
                                        ></Field>
                                        <ErrorMessage
                                            className="error"
                                            name="amount"
                                            component="div"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt--40">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="rnform-group">
                                        <Field
                                            style={{ padding: '1% 0 0 3%' }}
                                            as='textarea'
                                            placeholder="Message to be sent to us"
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
                                className="rn-button-style--2 btn-solid mt--80"
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



