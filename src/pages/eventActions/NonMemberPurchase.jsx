import React, { Fragment } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHttpClient } from "../../hooks/http-hook";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/Header";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Footer from "../../component/footer/Footer";
import Loader from "../../elements/ui/Loader";
import { useObjectGrabUrl } from "../../hooks/object-hook";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  policyTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  payTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const NonMemberPurchase = (props) => {
  const { loading, sendRequest } = useHttpClient();

  const target = useObjectGrabUrl(props.openSocietyEvents);

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
          <h2 className="center_text mb--80">Purchase a Ticket</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12">
            <div className="event_details">
              <img src={target.images[0]} alt="Event" className="title_img" />
              <h2 className="mt--40">Event Details</h2>
              <p>Name: {target.title}</p>
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
              <p>Address: {target.where}</p>
              <p>Price: {target.entry} euro</p>
              <div className="team_member_border-3 center_section mt--80">
                <p className="information center_text">
                  By becoming a member the cost of the ticket will be reduced
                  and the information will be prefilled for ticket purchasing
                </p>
                <a
                  className="rn-button-style--2 btn-solid center_text"
                  href="/signup"
                >
                  <span className="">Become a Member</span>
                </a>
              </div>
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
                    // Create a canvas element, add the image and text, covert to blob
                    var canvas = document.createElement("canvas");
                    var layout = canvas.getContext("2d");
                    let ticket = new Image();
                    ticket.src = target.ticket_img;
                    //image
                    canvas.width = ticket.naturalWidth;
                    canvas.height = ticket.naturalHeight;
                    layout.drawImage(
                      ticket,
                      0,
                      0,
                      ticket.naturalWidth,
                      ticket.naturalHeight
                    );
                    // text
                    let textName = values.name;
                    layout.rotate(4.71);
                    layout.font = "bold 70px Mozer";
                    layout.fillStyle = "#faf9f6";
                    layout.textAlign = "center";
                    layout.strokeText(textName, -340, 1520);
                    layout.fillText(textName, -340, 1520);

                    layout.font = "bold 70px Mozer";
                    layout.fillStyle = "#faf9f6";
                    let textSurname = values.surname;
                    layout.textAlign = "center";
                    layout.strokeText(textSurname, -340, 1600);
                    layout.fillText(textSurname, -340, 1600);
                    // blob
                    const dataBlob = await new Promise((resolve) =>
                      canvas.toBlob((blob) => resolve(blob), "image/jpeg")
                    );
                    // formData
                    const formData = new FormData();
                    formData.append(
                      "image",
                      dataBlob,
                      target.title + '_' + values.name + values.surname + "_GUEST"
                    );
                    formData.append("itemId", target.price_id);
                    formData.append("origin_url", window.location.origin);
                    formData.append("method", "buy_guest_ticket");
                    formData.append("eventName", target.title);
                    formData.append("eventDate", target.date);
                    formData.append("guestEmail", values.email);
                    formData.append(
                      "guestName",
                      values.name + " " + values.surname
                    );
                    formData.append("guestPhone", values.phone);
                    const responseData = await sendRequest(
                      "payment/checkout",
                      "POST",
                      formData
                    );
                    if (responseData.url) {
                      window.location.assign(responseData.url);
                    }
                  } catch (err) {}
                }}
                initialValues={{
                  name: "",
                  surname: "",
                  email: "",
                  phone: "",
                  policyTerms: false,
                  payTerms: false,
                }}
              >
                {() => (
                  <Form id="form" className="mb--120">
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
        </div>
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
};

export default NonMemberPurchase;