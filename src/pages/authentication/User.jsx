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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
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
  const [expand, setExpand] = useState(false);

  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const modal = useSelector(selectModal);

  const userId = useParams().userId;

  const closeHandler = () => {
    dispatch(removeModal());
  };


  const expandHandler = (elementId) => {
    const ticketImage = document.getElementById(elementId);
    const className = "expand_ticket_img";
    if (!ticketImage.classList.contains(className)) {
      ticketImage.classList.add(className);
      setExpand(true)
    } else {
      ticketImage.classList.remove(className);
      setExpand(false)
    }
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const responseData = await sendRequest(`user/${userId}`);
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
      {currentUser.status !== "active" && (
        <ModalWindow static="static" show={currentUser.status} freeze>
          <div style={{ padding: "40px" }} className="center_section">
            <h2>Your account is locked</h2>
            <p className="center_text">
              To continue using the benefits of a member please pay the 5euro
              subscription for the following semester!
            </p>
            {loading ? (
              <Loader />
            ) : (
              <button
                onClick={() => {}}
                className="rn-button-style--2 btn-solid mt--40"
              >
                Pay and unlock
              </button>
            )}
            <a href="/" className="rn-button-style--2 rn-btn-green mt--40">
              Back to Home
            </a>
          </div>
        </ModalWindow>
      )}
      {modal && (
        <ModalWindow show={modal}>
          <Formik
            className="inner"
            validationSchema={schema}
            onSubmit={async (values) => {
              try {
                const formData = new FormData();
                formData.append(
                  "image",
                  values.image,
                  currentUser.name + currentUser.surname + currentUser.phone
                );
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
                const responseData = await sendRequest(
                  `user/edit-info/${userId}`,
                  "PATCH",
                  formData
                );
                window.location.reload();
              } catch (err) {}
            }}
            initialValues={{
              image: currentUser.image,
              name: currentUser.name,
              surname: currentUser.surname,
              age: currentUser.age,
              phone: currentUser.phone,
              email: currentUser.email,
              university: currentUser.university,
              otherUniversityName: currentUser.otherUniversityName,
              course: currentUser.course,
              studentNumber: currentUser.studentNumber,
              policyTerms: false,
              dataTerms: false,
              notificationTerms: false,
              notificationTypeTerms: currentUser.notificationTypeTerms,
              payTerms: false,
            }}
          >
            {({ values, setFieldValue }) => (
              <Form
                encType="multipart/form-data"
                id="form"
                style={{ padding: "50px" }}
              >
                <div className="hor_section">
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
                    />
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
                  <img src={currentUser.image} alt="profile" />
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
              <h2 className="title mb--40">Ticket Collection</h2>
              {currentUser.tickets ? (
                <div className="row">
                  {currentUser.tickets.map((ticket, i) => (
                    <div className="col-lg-4 col-md-6 col-12" key={i}>
                      <OverlayTrigger
                        overlay={
                          <Tooltip id="tooltip-disabled">
                            {expand ? "Click to Shrink" : "Click to Expand"}
                          </Tooltip>
                        }
                      >
                        <img
                          id={`ticket${i}`}
                          className="mb--40"
                          src={ticket.image}
                          alt="ticket"
                          onClick={(event) => {
                            expandHandler(event.target.id);
                          }}
                        />
                      </OverlayTrigger>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No tickets purchased</p>
              )}
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
    <Loader />
  );
};

export default User;
