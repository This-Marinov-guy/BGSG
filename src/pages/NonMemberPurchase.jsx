import React, { Fragment, useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import PageHelmet from "../component/common/Helmet";
import Header from "../component/header/Header";
import Loader from "../elements/ui/Loader";
import Alert from "react-bootstrap/Alert";
import { FiX } from "react-icons/fi";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  policyTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  payTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const NonMemberPurchase = (props) => {
  const [purchase, setPurchase] = useState(false);
  const [formInputs, setFormInputs] = useState("");
  const { loading, sendRequest } = useHttpClient();

  const history = useHistory();

  const closeHandler = () => {
    props.setNotification(null);
  };
  
  return (
    <Fragment>
      <PageHelmet pageTitle="Buy Ticket" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
        dark
      />
      <div className="container mt--200">
        <h2 className="center_text mb--80">Purchase a Ticket</h2>
      </div>
      <div className="row purchase_panel">
        <div style={{ width: "40%" }} className="col-lg-4 col-md-12 col-12">
          <div className="event_details">
            <img
              src="/assets/images/portfolio/portfolio-big-01.jpg"
              alt="Event"
              className="title_img"
            />
            <h2 className="mt--40">Event Details</h2>
            <p>Name: Freedom Fest</p>
            <p>Date: 23.1.2021</p>
            <p>Time: 8:00</p>
            <p>Address: Groningen</p>
            <p>Price: 8 euro</p>
            <div className="team_member_border-3 mt--80">
              <p className="information">
                By becoming a member the cost of the ticket will be reduced and
                the information will be prefilled for ticket purchasing
              </p>
              <a className="rn-button-style--2 btn-solid" href="/signup">
                <span>Become a Member</span>
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
              className="inner"
              validationSchema={schema}
              onSubmit={async (values) => {
                // // Create a canvas element, add the image and text, covert to blob
                // var canvas = document.createElement("canvas");
                // var layout = canvas.getContext("2d");
                // let ticket = new Image();
                // ticket.src = "/assets/images/tickets/ticket.png";
                // //image
                // canvas.width = ticket.naturalWidth;
                // canvas.height = ticket.naturalHeight;
                // layout.drawImage(
                //   ticket,
                //   0,
                //   0,
                //   ticket.naturalWidth,
                //   ticket.naturalHeight
                // );
                // // text
                // let textName = values.name;
                // layout.rotate(4.71);
                // layout.font = "bold 70px Mozer";
                // layout.fillStyle = "#faf9f6";
                // layout.textAlign = "center";
                // layout.strokeText(textName, -340, 1520);

                // layout.font = "bold 70px Mozer";
                // layout.fillStyle = "#faf9f6";
                // let textSurname = values.surname;
                // layout.textAlign = "center";
                // layout.strokeText(textSurname, -340, 1600);
                // layout.fillText(textSurname, -340, 1600);
                // // blob
                // const dataBlob = await new Promise((resolve) =>
                //   canvas.toBlob((blob) => resolve(blob), "image/jpeg")
                // );
                // // formData
                // const formData = new FormData();
                // formData.append("itemId", "price_1MudzFIOw5UGbAo1w66nEEEv");
                // formData.append("origin_url", window.location.origin);
                // formData.append('method', "buy_guest_ticket")
                // formData.append("eventName", "freedom fest");
                // formData.append("eventDate", "03.03.2023");
                // formData.append(
                //   "guestName",
                //   values.name + " " + values.surname
                // );
                // formData.append("guestEmail", values.email);
                // formData.append("guestPhone", values.phone);
                // formData.append(
                //   "ticket",
                //   dataBlob,
                //   "freedom_fest_" + values.name + values.surname + "_GUEST"
                // );
                try {
                  const responseData = await sendRequest(
                    "payment/checkout",
                    "POST",
                    // formData
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
                <Form
                  id="form"
                  style={{ padding: "50px" }}
                >
                  <h3>Fill your details and buy a ticket</h3>
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
                      <Field type="email" placeholder="Email" name="email" />
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
                  {loading ? (
                    <Loader />
                  ) : (
                    <button
                      type="submit"
                      className="rn-button-style--2 btn-solid mt--80"
                    >
                      <span>Proceed to paying</span>
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NonMemberPurchase;
