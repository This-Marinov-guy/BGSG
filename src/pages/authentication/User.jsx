import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import { useSelector, useDispatch } from "react-redux";
import { removeModal, selectModal, showModal } from "../../redux/modal";
import Loader from "../../elements/ui/Loader";
import ImageInput from "../../elements/ui/ImageInput";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCircle, FiEdit, FiChevronUp, FiX } from "react-icons/fi";
import FooterTwo from "../../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";
import ModalWindow from "../../elements/ui/ModalWindow";

const schema = yup.object().shape({
  image: yup.string().required("Please upload your picture"),
  name: yup.string().required(),
  surname: yup.string().required(),
  age: yup.number().positive().required(),
  phone: yup.string().required(),
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
});

const User = () => {
  const [currentUser, setCurrentUser] = useState();

  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const modal = useSelector(selectModal);

  const userId = useParams().userId;

  const closeHandler = () => {
    dispatch(removeModal());
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:80/api/user/${userId}`
        );
        setCurrentUser(responseData.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCurrentUser();
  }, [sendRequest, userId]);

  return currentUser ? (
    <React.Fragment>
      <PageHelmet pageTitle="Profile" />
      <HeaderTwo
        title="Your Profile"
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {modal && (
        <ModalWindow>
          <Formik
            className="inner"
            validationSchema={schema}
            onSubmit={async (values) => {
              try {
                const formData = new FormData();
                formData.append("image", values.image);
                formData.append("name", values.name);
                formData.append("surname", values.surname);
                formData.append("age", values.age);
                formData.append("phone", values.phone);
                formData.append("email", values.email);
                formData.append("university", values.university);
                formData.append(
                  "otherUniversityName",
                  values.otherUniversityName
                );
                formData.append("course", values.course);
                formData.append("studentNumber", values.studentNumber);
                formData.append(
                  "notificationTypeTerms",
                  values.notificationTypeTerms
                );
                const data = await sendRequest(
                  `http://localhost:80/api/user/edit-info/:userId`,
                  "PATCH",
                  formData
                );
                console.log(data);
                dispatch(removeModal());
              } catch (err) {}
            }}
            initialValues={{
              image: "",
              name: "",
              surname: "",
              age: "",
              phone: "",
              email: "",
              university: "",
              otherUniversityName: "",
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
            {({ values, setFieldValue }) => (
              <Form
                encType="multipart/form-data"
                id="form"
                style={{ padding: "50px" }}
              >
                <div className="action_btns">
                  <h3>Fill your details and register</h3>
                  <FiX className="mr--20" onClick={closeHandler} />
                </div>
                <div className="row mb--40 mt--40">
                  <div className="col-lg-12 col-md-12 col-12">
                    <ImageInput
                      onChange={(event) => {
                        setFieldValue("image", event.target.files[0]);
                      }}
                      errorRequired={
                        <ErrorMessage
                          className="error"
                          name="image"
                          component="div"
                        />
                      }
                      value={currentUser.image}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="rnform-group">
                      <Field
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={currentUser.name}
                      />
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
                        value={currentUser.surname}
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
                        type="number"
                        placeholder="Age"
                        name="age"
                        value={currentUser.age}
                      />
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
                        value={currentUser.phone}
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
                      <Field
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={currentUser.email}
                      />
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
                    <Field
                      as="select"
                      name="university"
                      defaultValue={currentUser.university}
                    >
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
                          name="otherUniversityName"
                          value={currentUser.otherUniversityName}
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
                          placeholder="Course of studying"
                          name="course"
                          value={currentUser.course}
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
                          value={currentUser.studentNumber}
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
                  <Field
                    as="select"
                    name="notificationTypeTerms"
                    defaultValue={currentUser.notificationTypeTerms}
                  >
                    <option value="" disabled>
                      Contact By
                    </option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </Field>
                </div>
                {loading ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className="rn-button-style--2 btn-solid mt--80"
                  >
                    Update information
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </ModalWindow>
      )}
      {/* Start Info Area */}

      <div className="service-area ptb--120 bg_color--1 mt--120">
        <div className="container">
          <div className="row service-one-wrapper center_div">
            <div className="col-lg-6 col-md-12 col-12 ">
              <div className="service service__style--2 team_member_border-1">
                <div className="content center_div">
                  <img
                    src={`https://bgsg-users.s3.amazonaws.com/f654209c-80e6-4120-9ed9-11f15a6cb993.jpeg`}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="service service__style--2 team_member_border-2">
                <div style={{ width: "100%" }} className="content">
                  <h2>Hello again {currentUser.name}!</h2>
                  <div className="hor_section mb--40">
                    <p className="mt--20">Your information</p>
                    <FiEdit
                      className="edit_btn"
                      onClick={() => {
                        dispatch(showModal());
                      }}
                    />
                  </div>
                  <div className="pricing-body">
                    <ul
                      style={{ textAlign: "start" }}
                      className="list-style--1"
                    >
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Full Name:
                        {currentUser.name + " " + currentUser.surname}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Age:{" "}
                        {currentUser.age}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Email:
                        {currentUser.email}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Phone:
                        {currentUser.phone}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> University:
                        {currentUser.university}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Info Area */}
      <div className="container mt--80 mb--80">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb--30 mb_sm--0">
              <h2 className="title">News</h2>
              <ul>
                <li>
                  <p>
                    Open submissions for Active members! Press here to submit a
                    request and we will reach you soon
                  </p>
                  <button className="rn-button-style--2 btn-solid mt--20">
                    Become an Active Member
                  </button>
                </li>
                <li className="mt--40">
                  <p>
                    We will soon post information for our 2nd member event. Stay
                    tuned!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Start News Area */}

      {/* End News Area */}

      {/* Start Collection Area */}
      <div className="container mt--80 mb--80">
        <div className="row">
          <div className="col-lg-12">
            <div className="mb--30 mb_sm--0">
              <h2 className="title">Ticket Collection</h2>
              <p>No tickets purchased</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Collection Area */}
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
  ) : (
    <p>No such user! Please try again</p>
  );
};

export default User;
