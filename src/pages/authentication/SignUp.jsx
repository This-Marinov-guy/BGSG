import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCheck } from "react-icons/fi";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/HeaderLogo";
import { FiUserPlus } from "react-icons/fi";

const schema = yup.object().shape({
  image: yup.string().required("Please upload your picture"),
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

const options = [
  {
    icon: <FiUserPlus />,
    title: "Member",
    description: "Be part of the society. With this membership you get:  ",
    price: 5,
  },
];
const SignUp = () => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const inputHandler = (event) => {
    //set image
    let pickedFile;
    if (event.target.files || event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Join" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <div className="container">
        <h2 className="center_text">Become a Member</h2>
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
                    <h3 style={{ width: "40%" }}>{val.price} euro/semester</h3>
                  </div>
                  <div className="content">
                    <h3>{val.title}</h3>
                    <p>{val.description}</p>
                    <div className="pricing-body">
                      <ul
                        style={{ textAlign: "start" }}
                        className="list-style--1"
                      >
                        <li>
                          <FiCheck /> Access to exclusive member events
                        </li>
                        <li>
                          <FiCheck /> Discounts to all events
                        </li>
                        <li>
                          <FiCheck /> Premium named event tickets
                        </li>
                        <li>
                          <FiCheck /> Collection of tickets at your page
                        </li>
                      </ul>
                    </div>
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
            onSubmit={(values) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 1000);
            }}
            initialValues={{
              image: "",
              name: "",
              surname: "",
              age: "",
              phone: "",
              email: "",
              university: "",
              universityName: "",
              course: "",
              studentNumber: "",
              password: "",
              confirmPassword: "",
              policyTerms: false,
              dataTerms: false,
              notificationTerms: false,
              notificationTypeTerms: "",
              payTerms: false,
            }}
          >
            {({ values }) => (
              <Form id="form" style={{ padding: "50px" }}>
                <h3>Fill your details and register</h3>
                <div className="row mb--40 mt--40">
                <div className="col-lg-12 col-md-12 col-12">
                  <div className="rnform-group ">
                    <div className="image_input_window">
                      <Field
                        className="image_input_field"
                        onInput={inputHandler}
                        type="file"
                        placeholder="Image"
                        name="image"
                      />
                      {!previewUrl ? (
                        <FiUserPlus/>
                      ) : (
                        <img
                          className="upload_image"
                          src={previewUrl}
                          alt="Preview"
                        />
                      )}
                    </div>
                    <div>
                      <ErrorMessage
                        className="error"
                        name="image"
                        component="div"
                      />
                      {!isValid && (
                        <p className="error">
                          Corrupted file, please try again
                        </p>
                      )}
                    </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field type="text" placeholder="Name" name="name" />
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
                      <Field type="number" placeholder="Age" name="age" />
                      <ErrorMessage
                        className="error"
                        name="age"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field
                        type="tel"
                        placeholder="Phone (WhatsApp)"
                        name="phone"
                      />
                      <ErrorMessage
                        className="error"
                        name="phone"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
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
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <Field as="select" name="university">
                      <option value="" disabled>
                        Select your univerisity
                      </option>
                      <option value="RUG">RUG</option>
                      <option value="Hanze">Hanze</option>
                      <option value="other">Other univerisity</option>
                      <option value="working">Working</option>
                    </Field>
                    <ErrorMessage
                      className="error"
                      name="university"
                      component="div"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    {values.university === "other" && (
                      <div className="rnform-group">
                        <Field
                          type="text"
                          placeholder="State the university"
                          name="universityName"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="universityName"
                          component="div"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {values.university !== "working" && (
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <Field
                          type="text"
                          placeholder="Course of studying"
                          name="course"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="course"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <Field
                          type="number"
                          placeholder="Student Number"
                          name="studentNumber"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="studentNumber"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field
                        type="password"
                        placeholder="Password"
                        name="password"
                      ></Field>
                      <ErrorMessage
                        className="error"
                        name="password"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                      ></Field>
                      <ErrorMessage
                        className="error"
                        name="confirmPassword"
                        component="div"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
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
                        society's rules and regulations
                      </a>
                    </p>
                  </div>
                  <ErrorMessage
                    className="error"
                    name="policyTerms"
                    component="div"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mt--40">
                    <Field
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                      name="dataTerms"
                    ></Field>
                    <p className="information">
                      I consent to my data being processed confidentially for
                      the purposes of the organization
                    </p>
                  </div>
                  <ErrorMessage
                    className="error"
                    name="dataTerms"
                    component="div"
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mt--40">
                    <Field
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                      name="notificationTerms"
                    ></Field>
                    <p className="information">
                      I consent to being notified by BGSG about events and
                      discounts from us and our sponsors
                    </p>
                  </div>
                  <Field as="select" name="notificationTypeTerms">
                    <option value="" disabled>
                      Contact By
                    </option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </Field>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="hor_section_nospace mt--40">
                    <Field
                      style={{ maxWidth: "30px", margin: "10px" }}
                      type="checkbox"
                      name="payTerms"
                    ></Field>
                    <p className="information">
                      I understand that my registration is complete after paying
                      the link I will receive on my email.
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
                <div
                  style={{ alignItems: "flex-start" }}
                  className="action_btns"
                >
                  <a className="rn-button-style--1" href="/login">
                    I am a member
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* End Form Area */}
    </React.Fragment>
  );
};

export default SignUp;
