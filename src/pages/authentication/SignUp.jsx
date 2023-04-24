import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCheck } from "react-icons/fi";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";
import { FiUserPlus } from "react-icons/fi";
import { useHttpClient } from "../../hooks/http-hook";
import Loader from "../../elements/ui/Loader";
import ImageInput from "../../elements/ui/ImageInput";
import FooterTwo from "../../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";

const schema = yup.object().shape({
  image: yup.string(),
  name: yup.string().required(),
  surname: yup.string().required(),
  birth: yup.string().required("Date of Birth is a required field"),
  phone: yup.string().min(8).required(),
  email: yup.string().email("Please enter a valid email").required(),
  university: yup.string().required(),
  otherUniversityName: yup.string().when("university", {
    is: "other",
    then: () => yup.string().required("Please state which university"),
    otherwise: () => yup.string(),
  }),
  course: yup.string().when("university", {
    is: true,
    then: () => yup.string().required("Your course is a required filed"),
    otherwise: () => yup.string(),
  }),
  studentNumber: yup.string().when("university", {
    is: true,
    then: () =>
      yup.string().required("Your student number is a required filed"),
    otherwise: () => yup.string(),
  }),
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
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Passwords do not match"),
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
const SignUp = (props) => {
  const { loading, sendRequest } = useHttpClient();

  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Join" />
      <HeaderTwo
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      <div className="container mt--200">
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
            onSubmit={async (values) => {
              const formData = new FormData();
              if (values.image) {
                formData.append(
                  "image",
                  values.image,
                  values.name + values.surname + values.birth
                );
              } else {
                formData.append("image", null);
              }
              formData.append("itemId", "price_1N0LPvIOw5UGbAo12uU6bUpm");
              formData.append("origin_url", window.location.origin);
              formData.append("method", "signup");
              formData.append("name", values.name);
              formData.append("surname", values.surname);
              formData.append("birth", values.birth);
              formData.append("phone", values.phone);
              formData.append("email", values.email);
              formData.append("university", values.university);
              formData.append(
                "otherUniversityName",
                values.otherUniversityName
              );
              formData.append("course", values.course);
              formData.append("studentNumber", values.studentNumber);
              formData.append("password", values.password);
              formData.append(
                "notificationTypeTerms",
                values.notificationTypeTerms
              );
              try {
                const responseData = await sendRequest(
                  "user/check-email",
                  "POST",
                  JSON.stringify({
                    email: values.email,
                  }),
                  {
                    "Content-Type": "application/json",
                  }
                );
              } catch (err) {
                return;
              }
              if (values.memberKey) {
                try {
                  const responseData = await sendRequest(
                    "user/check-member-key",
                    "POST",
                    JSON.stringify({
                      key: values.memberKey,
                    }),
                    {
                      "Content-Type": "application/json",
                    }
                  );
                  if (responseData.message === "verifiedKey") {
                    formData.append("memberKey", values.memberKey);
                    try {
                      const responseData = await sendRequest(
                        `user/signup`,
                        "POST",
                        formData
                      );
                      dispatch(
                        login({
                          userId: responseData.userId,
                          token: responseData.token,
                          expirationDate: new Date(
                            new Date().getTime() + 36000000
                          ).toISOString(),
                        })
                      );
                      history.push("/");
                      return;
                    } catch (err) {}
                  }
                } catch (err) {
                  return;
                }
              }
              try {
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
              image: "",
              name: "",
              surname: "",
              birth: "",
              phone: "",
              email: "",
              university: "",
              otherUniversityName: "",
              course: "",
              studentNumber: "",
              password: "",
              confirmPassword: "",
              memberKey: "",
              policyTerms: false,
              dataTerms: false,
              notificationTerms: false,
              notificationTypeTerms: "",
              payTerms: false,
            }}
          >
            {({ values, setFieldValue }) => (
              <Form
                encType="multipart/form-data"
                id="form"
                style={{ padding: "50px" }}
              >
                <h3>Fill your details and register</h3>
                <div className="row mb--40 mt--40">
                  <div className="col-lg-12 col-md-12 col-12">
                    <h3 className="center_text">Profile picture</h3>
                    <ImageInput
                      onChange={(event) => {
                        setFieldValue("image", event.target.files[0]);
                      }}
                    />
                    <p className="mt--10 information center_text">
                      *optional - we will asign you a cool traditional avatar
                    </p>
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
                      <Field
                        type="date"
                        min="1900-01-01"
                        max="2100-12-30"
                        placeholder="Date of Birth"
                        name="birth"
                      />
                      <p className="information">
                        *Month is first and after that the Day
                      </p>
                      <ErrorMessage
                        className="error"
                        name="birth"
                        component="div"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field
                        type="tel"
                        placeholder="WhatsApp Phone "
                        name="phone"
                      ></Field>
                      <p className="information">
                        Please type your number with + and country code
                      </p>
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
                        Select your university
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
                          name="otherUniversityName"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="otherUniversityName"
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
                          placeholder="Study Program"
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
                          type="text"
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
                        autoComplete="off"
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
                        autoComplete="off"
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
                  <div className="col-lg-6 col-md-12 col-12 mt--40 mb--40 team_member_border-1">
                    <div className="rnform-group">
                      <h3 className="center_text">
                        For users with already paid membership
                      </h3>
                      <Field
                        type="text"
                        placeholder="Access Key"
                        name="memberKey"
                      ></Field>
                      <p className="information">
                        This is a access key field for users that are already
                        members. Please ignore it if you do not have an access
                        key. If you use key that does not belong to you, your
                        account will be suspended!
                      </p>
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
                        href="/rules-and-regulations"
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
                    <option value="Email & WhatsApp">Both</option>
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
                  disabled={loading}
                  type="submit"
                  className="rn-button-style--2 btn-solid mt--80"
                >
                  {loading ? <Loader /> : <span>Proceed to paying</span>}
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
      {/* Start Footer Style  */}
      <FooterTwo />
      {/* End Footer Style  */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </React.Fragment>
  );
};

export default SignUp;
