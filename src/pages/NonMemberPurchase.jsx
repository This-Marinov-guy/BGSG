import React, { Fragment, useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PageHelmet from "../component/common/Helmet";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Header from "../component/header/Header";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().positive().required(),
  phone: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  university: yup.string().required(),
  universityName: yup.string().required("university name is a required filed"),
  course: yup.string().required(),
  studentNumber: yup
    .string()
    .required("your student number is a required filed"),
  password: yup
    .string()
    .min(5)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
      "Please create a stronger password with capital and small letters, number and a special symbol"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("passwords do not match"),
  policyTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  dataTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  payTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const NonMemberPurchase = () => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand(!expand);
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
          <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{expand ? "Click to Shrink" : 'Click to Expand'}</Tooltip>}>
            <img
              onClick={expandHandler}
              src="/assets/images/tickets/ticket.png"
              alt="ticket"
              className={expand ? "title_img expand_img" : "title_img"}
            />
            </OverlayTrigger>
            <h2 className="mt--40">Event Details</h2>
            <p>Name: Freedome Fest</p>
            <p>Date: 23.1.2021</p>
            <p>Time: 8:00</p>
            <p>Address: Groningen</p>
            <p>Price: 8 euro</p>
            <div className="team_member_border-3 mt--80">
              <p className="information">
                By becoming a member the cost of the ticket will be reduced and
                the information will be prefilled for ticket purchasing
              </p>
              <a className="rn-button-style--2 btn-solid">
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
              onSubmit={(values) => {
                
              }}
              initialValues={{
                name: "",
                surname: "",
                email: "",
                policyTerms: false,
                payTerms: false,
              }}
            >
              {({ values }) => (
                <Form id="form" style={{ padding: "50px" }}>
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
                  </div>
                  <div className="row">
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
                        I understand that my registration is complete after
                        paying the link I will receive on my email.
                      </p>
                    </div>
                    <ErrorMessage
                      className="error"
                      name="payTerms"
                      component="div"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rn-button-style--2 btn-solid mt--80"
                  >
                    <span>Proceed to paying</span>
                  </button>
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
