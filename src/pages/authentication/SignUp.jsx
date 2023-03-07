import React, { useState } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/HeaderLogo";
import { FiUserPlus } from "react-icons/fi";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().positive().required(),
  email: yup.string().email("Please enter a valid email").required(),
  password: yup
    .string()
    .min(5)
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, {
      message: "Please create a stronger password",
    })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const options = [
  {
    icon: <FiUserPlus />,
    title: "Member",
    description:
      "Be part of the society. With this status you get discounts for our events and buying tickets becomes easier. Members have their names displayed on tickets and also they gain a collection here on their page!",
    price: 5,
  },
];
const SignUp = () => {
  const [membership, setMembership] = useState();

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Join" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <div className="container">
        <h2 className="center_text">Become a member</h2>
      </div>
      {/* Start Options Area */}

      <div className="service-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row service-one-wrapper center_div">
            {options.map((val, i) => (
              <div key={i}>
                <button
                  style={
                    val.title === "Active Member"
                      ? { border: "5px solid #ffd700" }
                      : { border: "5px solid #017363" }
                  }
                  className="service service__style--2"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({
                        top: document.getElementById("form").scrollHeight,
                        behavior: "smooth",
                      });
                    }, 100);
                  }}
                >
                  <div className="hor_section">
                    <div className="icon">{val.icon}</div>
                    <h3 style={{ width: "40%" }}>
                      {val.price} euro per semester
                    </h3>
                  </div>
                  <div className="content">
                    <h3>{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End Options Area */}
      {/* Start Form Area */}

      <div className="blog-comment-form pb--120 bg_color--1">
        <div className="container">
          <Formik
            className="inner"
            validationSchema={schema}
            validateOnChange={false}
            onSubmit={async (values) => {
              try {
              } catch (err) {}
            }}
            initialValues={{
              name: "",
              surname: "",
              image: "",
              age: "",
              email: "",
              password: "",
              confirmPassword: "",
              terms: false,
            }}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              values,
              touched,
              errors,
            }) => (
              <form
                id="form"
                style={{ padding: "50px" }}
                noValidate
                onSubmit={handleSubmit}
              >
                <h3>Fill your details and register as a {membership}</h3>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input
                        type="text"
                        placeholder="Name"
                        value={values.name}
                        isValid={touched.name && !errors.name}
                        isInvalid={!!errors.name}
                        errorMessage={errors.name}
                        onChange={handleChange}
                      />
                      {errors.name && touched.name && (
                        <p style={{ color: "red" }} className="information">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input type="text" placeholder="Surname"></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input type="number" placeholder="Age" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input type="tel" placeholder="Phone (WhatsApp)" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <select>
                      <option value="" disabled selected>
                        Select your univerisity
                      </option>
                      <option value="RUG">RUG</option>
                      <option value="Hanze">Hanze</option>
                      <option value="">Other univerisity</option>
                      <option value="working">Working</option>
                    </select>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input
                        type="text"
                        placeholder="State the university"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input
                        type="text"
                        placeholder="Course of studying"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input type="number" placeholder="Student Number"></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input type="password" placeholder="Password"></input>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mt--40 mb--40">
                    <input
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                    ></input>
                    <p className="information">
                      I have read and accept the
                      <a
                        style={{ color: "#017363" }}
                        href="/assets/documents/Rules and regulations.pdf"
                        target="_blank"
                      >
                        society's policy
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mb--40">
                    <input
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                    ></input>
                    <p className="information">
                      I consent to my data being processed confidentially for
                      the purposes of the organization
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mb--20">
                    <input
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                    ></input>
                    <p className="information">
                      I consent to being notified by BGSG about events and
                      discounts from us and our sponsors
                    </p>
                  </div>
                  <select className="mb--40">
                    <option value="" disabled selected>
                      Contact me by:
                    </option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mb--40">
                    <input
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                    ></input>
                    <p className="information">
                      I understand that my registration is complete after paying
                      the link I will receive on my email.
                    </p>
                  </div>
                </div>
                <button
                  style={{ marginTop: "40px" }}
                  type="submit"
                  className="rn-button-style--2 btn-solid"
                >
                  <span>Proceed to paying</span>
                </button>
                <div
                  style={{ alignItems: "flex-start" }}
                  className="action_btns"
                >
                  <a className="rn-button-style--1" href="/login">
                    I am a member
                  </a>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {/* End Form Area */}
    </React.Fragment>
  );
};

export default SignUp;
