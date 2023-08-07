import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHttpClient } from "../../hooks/http-hook";
import { useHistory } from "react-router-dom";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/Header";
import Loader from "../../elements/ui/Loader";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";
import Footer from "../../component/footer/Footer";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    surname: yup.string().required("Surname is required"),
    email: yup.string().email("Please enter a valid email").required(),
    comments: yup.string()
});

const ContestRegister = (props) => {
    const { loading, sendRequest } = useHttpClient();

    const history = useHistory();

    const closeHandler = () => {
        props.setNotification(null);
    };

    return (
        <React.Fragment>
            <PageHelmet pageTitle="Event Details" />

            <Header
                headertransparent="header--transparent"
                colorblack="color--black"
                logoname="logo.png"
            />

            {/* Start Breadcrump Area */}
            <div
                className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--20`}
                data-black-overlay="7"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rn-page-title text-center pt--100">
                                <h2 className="title theme-gradient">Video Creation Contest</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Portfolio Details */}
            <div className="rn-portfolio-details ptb--120 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-details">
                                <div className="inner">
                                    <h2>About</h2>
                                    <p>Do you love editing videos, making reels or spending time on social media? Create a short dynamic promo video (0:20 - 0:40 min long) in a reel format (16:9) using the materials provided and enter for a chance to win 50€!
                                    </p>
                                    <p>After signing up you will receive a folder with photos and videos from previous events as well as some statistics. You can select which of these to use to best represent BGSG.
                                    </p>

                                    <p>You can submit a maximum of 2 short videos via email using Google Drive or WeTransfer. Read carefully the Terms & Conditions for more information.
                                    </p><br />
                                    <p>Deadline: 5th September, 23:59
                                    </p>
                                    <p>Announcing the winner: 20th September, 13:00
                                    </p>
                                    <span className="ma"><a href='/contest/promo-video'>Terms and Conditions</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-comment-form pb--120 bg_color--1">
                <div className="container">
                    <Formik
                        className="inner"
                        validationSchema={schema}
                        onSubmit={async (values) => {
                            try {
                                const responseData = await sendRequest(
                                    "contest/register",
                                    "POST",
                                    JSON.stringify({
                                        contestName: 'video-creation',
                                        name: values.name,
                                        surname: values.surname,
                                        email: values.email,
                                        comments: values.comments
                                    }),
                                    {
                                        "Content-Type": "application/json",
                                    }
                                );
                                props.setNotification(
                                    <Alert className="error_panel" variant="success">
                                        <div className="action_btns">
                                            <h3>Thank you for your interest!</h3>
                                            <FiX className="x_icon" onClick={closeHandler} />
                                        </div>
                                        <p>
                                            Please check your email for materials and hope you will have fun creating something for the society! Good luck!
                                        </p>

                                    </Alert>
                                );
                                history.push("/");
                                setTimeout(() => closeHandler(), 5000);
                                return;
                            } catch (err) {
                            }
                        }}
                        initialValues={{
                            name: '',
                            surname: '',
                            email: '',
                            comments: '',
                        }}
                    >
                        {() => (
                            <Form
                                id="form"
                                style={{ padding: "2%" }}
                            >
                                <h3>Register</h3>
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
                                                type="text"
                                                placeholder="Surname"
                                                name="surname"
                                            ></Field>
                                            <ErrorMessage
                                                className="error"
                                                name="surname"
                                                component="div"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-12">
                                        <div className="rnform-group">
                                            <Field
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                            ></Field>
                                            <ErrorMessage
                                                className="error"
                                                name="email"
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
                                                placeholder="Comments/questions"
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

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="hor_section_nospace mt--40">
                                            <Field
                                                style={{ maxWidth: "30px", margin: "10px" }}
                                                type="checkbox"
                                                name="policyTerms"
                                            ></Field>
                                            <p className="information">
                                                I have read and accept the&nbsp;
                                                <a
                                                    style={{ color: "#017363" }}
                                                    href="/contest/promo-video"
                                                    target="_blank"
                                                >
                                                    Terms & Conditions


                                                </a>
                                            </p>
                                        </div>
                                        <ErrorMessage
                                            className="error"
                                            name="policyTerms"
                                            component="div"
                                        />

                                    </div>
                                </div>
                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="rn-button-style--2 btn-solid mt--80"
                                >
                                    {loading ? <Loader /> : <span>Finish Registration</span>}
                                </button>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {/* End Form Area */}
            {/* End Portfolio Details */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />
        </React.Fragment >
    );
};
export default ContestRegister;
