import React, { Fragment, useEffect, useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHttpClient } from "../../hooks/http-hook";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/Header";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../../component/footer/Footer";
import ImageFb from "../../elements/ui/ImageFb";
import Loader from "../../elements/ui/Loader";
import PageLoading from "../../elements/ui/PageLoading";
import { useObjectGrabUrl } from "../../hooks/object-hook";
import { OPEN_SOCIETY_EVENTS } from "../../util/EVENTS";
import { createCustomerTicket } from "../../util/ticket-creator"
import FormExtras from "../../elements/ui/FormExtras";
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  menuType: yup.string().required("Please select a menu"),
  drink: yup.string().required('Please select your drink'),
  policyTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  payTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});


const NonMemberPurchase = () => {
  const { loading, sendRequest } = useHttpClient();

  const [loadingPage, setLoadingPage] = useState(true);
  const [remainingTickets, setRemainingTickets] = useState()
  const [eventClosed, setEventClosed] = useState(false)

  const target = useObjectGrabUrl(OPEN_SOCIETY_EVENTS);
  const history = useHistory()

  function calculateTimeRemaining(timer) {
    const now = new Date().getTime();
    const targetTime = new Date(timer).getTime();
    const timeDifference = targetTime - now;
    return Math.max(0, timeDifference);
  }

  useEffect(() => {
    setLoadingPage(true);
    if (target.ticketLimit) {
      const checkRemainingTicketQuantity = async () => {
        try {
          const responseData = await sendRequest(`event/sold-ticket-count`, "POST", JSON.stringify({
            eventName: target.title,
          }),
            {
              "Content-Type": "application/json",
            });
          setRemainingTickets(target.ticketLimit - responseData.ticketsSold);
          if (remainingTickets <= 0) {
            setEventClosed(true)
          }
        } catch (err) {
          console.log(err);
        }
      };
      checkRemainingTicketQuantity();
    }
    if (target.ticketTimer) {
      const timeRemaining = calculateTimeRemaining(target.ticketTimer);
      if (timeRemaining <= 0) {
        setEventClosed(true)
      }
    }
    setLoadingPage(false)
  }, [target])

  if (loadingPage) {
    return <PageLoading />
  } else if (eventClosed) {
    return (
      <div className="container center_text mt--100">
      <ImageFb
        className="logo mb--40"
        src="/assets/images/logo/logo.webp"
        fallback="/assets/images/logo/logo.jpg"
        alt="Logo"
      />
      <h3 className="">Opps ... it is all SOLD OUT! Please check the event description for tickets on-the-door or contact us through our email! Hope we see you soon!</h3>
      <a href='/'
        className="rn-button-style--2 btn-solid mt--20"
      >
        Home
      </a>
    </div>)
  } else {
    return (
      <Fragment>
        <PageHelmet pageTitle="Buy Ticket" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
          dark
        />

        <div className="container">
          <div className="mt--200">
            {target.membersOnly ? <h3 className="center_text mb--80">Opps... it seems that this is an event exclusive to members! You still have a chance to enter!</h3> :
              <h2 className="center_text mb--80">Purchase a Ticket</h2>}

            <div className="team_member_border-3 center_section" style={{ maxWidth: '500px', margin: '60px auto' }} >
              <p className="information center_text">
                By becoming a member the cost of the ticket will be reduced
                and the information will be prefilled for ticket purchasing
              </p>
              <a
                className="rn-button-style--2 rn-btn-reverse-green center_text mb--10"
                href="/login"
              >
                <span className="">Log in</span>
              </a>
              <a
                className="rn-button-style--2 btn-solid center_text"
                href="/signup"
              >
                <span className="">Become a Member</span>
              </a>
            </div>
          </div>
          {!target.membersOnly && <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="mb--20">
                <ImageFb src={`${target.images[0]}.webp`} fallback={`${target.images[0]}.jpg`} alt="Event" className="title_img" />
                <h2 className="mt--40">Event Details</h2>
                <p>Name:{" "}{target.title}</p>
                <p>
                  Date:{" "}
                  {target.correctedDate
                    ? target.correctedDate + " Updated!"
                    : target.date}
                </p>
                <p>
                  Time:{" "}
                  {target.correctedTime
                    ? target.correctedTime + " Updated!"
                    : target.time}
                </p>
                <p>Address:{" "}{target.where}</p>
                <p>Price:{" "}{target.entry} euro</p>

              </div>
            </div>
            <div style={{ width: "20%" }} className="col-lg-4 col-md-12 col-12">
              <div className="line" />
            </div>
            <div style={{ width: "40%" }} className="col-lg-4 col-md-12 col-12">
              <div className="container">
                <Formik
                  validationSchema={schema}
                  onSubmit={async (values) => {
                    try {
                      const ticket = await createCustomerTicket(target.ticket_img, values.name, values.surname);
                      // formData
                      const formData = new FormData();
                      formData.append(
                        "image",
                        ticket,
                        target.title +
                        "_" +
                        values.name +
                        values.surname +
                        "_GUEST"
                      );
                      formData.append("itemId", target.price_id);
                      formData.append("origin_url", window.location.origin);
                      formData.append("method", "buy_guest_ticket");
                      formData.append("eventName", target.title);
                      formData.append("eventDate", target.date);
                      formData.append("guestEmail", values.email);
                      if (target.extraInputs) {
                        formData.append('preferences', JSON.stringify({ menuType: values.menuType, drink: values.drink }))
                      }
                      formData.append(
                        "guestName",
                        values.name + " " + values.surname
                      );
                      formData.append("guestPhone", values.phone);
                      if (target.freePass.includes(values.email) || target.freePass.includes(values.name + ' ' + values.surname)) {
                        const responseData = await sendRequest(
                          "event/purchase-ticket/guest",
                          "POST",
                          formData
                        );
                        history.push('/success');
                      } else {
                        const responseData = await sendRequest(
                          "payment/checkout/guest",
                          "POST",
                          formData
                        );
                        if (responseData.url) {
                          window.location.assign(responseData.url);
                        }
                      }
                    } catch (err) {
                      // console.log(err)
                    }
                  }}
                  initialValues={{
                    name: "",
                    surname: "",
                    email: "",
                    phone: "",
                    menuType: target.extraInputs ? "" : 'none',
                    drink: target.extraInputs ? "" : 'none',
                    policyTerms: false,
                    payTerms: false,
                  }}
                >
                  {() => (
                    <Form id="form" encType="multipart/form-data"
                      className="mb--120">
                      <h3>Fill your details and buy a ticket</h3>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-12">
                          <div className="rnform-group">
                            <Field type="text" placeholder="Name" name="name" />
                            <ErrorMessage
                              className="error"
                              name="name"
                              component="div"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
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
                        <div className="col-lg-12 col-md-12 col-12">
                          <div className="rnform-group">
                            <Field
                              type="email"
                              placeholder="Email"
                              name="email"
                            />
                            <p className="information">
                              Please enter an email you have access to as the ticket will be send through it
                            </p>
                            <ErrorMessage
                              className="error"
                              name="email"
                              component="div"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12">
                          <div className="rnform-group">
                            <Field type="tel" placeholder="Phone" name="phone" />
                            <p className="information">
                              Please enter your real number as it might be used to
                              prove your identity on the entry
                            </p>
                            <ErrorMessage
                              className="error"
                              name="phone"
                              component="div"
                            />
                          </div>
                        </div>
                        {target.extraInputs && <FormExtras />}
                        <div className="col-lg-12 col-md-12 col-12">
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
                                href="/assets/documents/Rules and regulations.pdf"
                                target="_blank"
                              >
                                society's policy
                              </a>
                            </p>
                          </div>
                          <ErrorMessage
                            className="error"
                            name="policyTerms"
                            component="div"
                          />
                        </div>

                        <div className="col-lg-12 col-md-12 col-12">
                          <div className="hor_section_nospace mt--40">
                            <Field
                              style={{ maxWidth: "30px", margin: "10px" }}
                              type="checkbox"
                              name="payTerms"
                            ></Field>
                            <p className="information">
                              I agree to share the provided information with the
                              organization in case they need to prove my identity
                            </p>
                          </div>
                          <ErrorMessage
                            className="error"
                            name="payTerms"
                            component="div"
                          />
                        </div>
                      </div>
                      <button
                        disabled={loading}
                        type="submit"
                        className="rn-button-style--2 btn-solid mt--80"
                      >
                        {loading ? <Loader /> : <span>Proceed to paying</span>}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>}
        </div>
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </Fragment>
    );
  }
};

export default NonMemberPurchase;
