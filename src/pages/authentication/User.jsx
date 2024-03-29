import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../hooks/http-hook";
import { useSelector, useDispatch } from "react-redux";
import { removeModal, selectModal, showModal } from "../../redux/modal";
import Loader from "../../elements/ui/Loader";
import ImageInput from "../../elements/ui/ImageInput";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCircle, FiCheckCircle, FiEdit, FiChevronUp, FiX } from "react-icons/fi";
import FooterTwo from "../../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";
import ModalWindow from "../../elements/ui/ModalWindow";
import Locked from "../../elements/ui/Locked";
import PageLoading from '../../elements/ui/PageLoading'
import { LazyLoadImage } from "react-lazy-load-image-component";
import WindowShift from "../../elements/ui/WindowShift";
import ImageFb from "../../elements/ui/ImageFb";
import Greeting from "../../elements/Greeting";
import Christmas from "../../elements/special/Christmas";

const schema = yup.object().shape({
  image: yup.string(),
  name: yup.string().required(),
  surname: yup.string().required(),
  phone: yup.string().min(8).required(),
  email: yup.string().email("Please enter a valid email").required(),
  university: yup.string().required(),
  otherUniversityName: yup.string().when("university", {
    is: "other",
    then: () => yup.string().required("Please state which university"),
    otherwise: () => yup.string(),
  }),
  graduationDate: yup.number().when("university", {
    is: true,
    then: () => yup.number().required("Graduation year is required"),
    otherwise: () => yup.number(),
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
      setExpand(true);
    } else {
      ticketImage.classList.remove(className);
      setExpand(false);
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
  }, [userId, sendRequest]);

  return currentUser ? (
    <React.Fragment>
      <PageHelmet pageTitle="Profile" />
      <HeaderTwo
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <Christmas currentUser={currentUser} />
      {currentUser.status !== "active" && (
        <Locked case="locked" show={currentUser.status} />
      )}
      {modal && (
        <ModalWindow show={modal}>
          <Formik
            className="inner"
            validationSchema={schema}
            onSubmit={async (values) => {
              const formData = new FormData();
              if (values.image) {
                formData.append(
                  "image",
                  values.image,
                  currentUser.name + currentUser.surname + currentUser.birth
                );
              } else {
                formData.append("image", null);
              }
              formData.append("name", values.name);
              formData.append("surname", values.surname);
              formData.append("phone", values.phone);
              formData.append("email", values.email);
              formData.append("university", values.university);
              formData.append(
                "otherUniversityName",
                values.otherUniversityName
              );
              formData.append('graduationDate', values.graduationDate)
              formData.append("course", values.course);
              formData.append("studentNumber", values.studentNumber);
              formData.append(
                "notificationTypeTerms",
                values.notificationTypeTerms
              );
              if (currentUser.email !== values.email) {
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
              }
              try {
                const responseData = await sendRequest(
                  `user/edit-info/${userId}`,
                  "PATCH",
                  formData
                );
                window.location.reload();
              } catch (err) { }
            }}
            initialValues={{
              image: "",
              name: currentUser.name,
              surname: currentUser.surname,
              phone: currentUser.phone,
              email: currentUser.email,
              university: currentUser.university,
              otherUniversityName: currentUser.otherUniversityName,
              graduationDate: currentUser.otherUniversityName || '',
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
                style={{ padding: "2%" }}
              >
                <div className="hor_section">
                  <h3>Update your details</h3>
                  <FiX className="x_icon" onClick={closeHandler} />
                </div>
                <div className="row mb--40 mt--40">
                  <div className="col-lg-12 col-md-12 col-12">
                    <ImageInput
                      onChange={(event) => {
                        setFieldValue("image", event.target.files[0]);
                      }}
                      initialImage={currentUser.image}
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
                  {values.university === "other" && (
                    <div className="col-lg-6 col-md-12 col-12">
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
                    </div>
                  )}
                  {values.university !== "working" && (
                    <Fragment>
                      <div className="col-lg-6 col-md-12 col-12">
                        <Field
                          type="number"
                          min="2020"
                          max="2050"
                          placeholder="Graduation Year"
                          name="graduationDate"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="graduationDate"
                          component="div"
                        />
                      </div>
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
                    </Fragment>
                  )}
                </div>
                <div className="row">
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
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="rn-button-style--2 btn-solid mt--80"
                >
                  {loading ? <Loader /> : <span>Update information</span>}
                </button>
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
              <div className="service service__style--2">
                <div className="content center_div">
                  <LazyLoadImage src={currentUser.image} alt="profile" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="service service__style--2 team_member_border-5">
                <div className="content">
                  <h2>Hello again, {currentUser.name}!</h2>
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
                        <FiCircle style={{ fontSize: "14px" }} /> Full Name:{" "}
                        {currentUser.name + " " + currentUser.surname}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Date of Birth:{" "}
                        {currentUser.birth}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Email:{" "}
                        {currentUser.email}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Phone:{" "}
                        {currentUser.phone}
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> University:{" "}
                        {currentUser.university === "other"
                          ? currentUser.otherUniversityName
                          : currentUser.university}
                      </li>

                      <li style={{ fontWeight: "bold" }}>
                        <FiCircle style={{ fontSize: "14px" }} /> Membership
                        Expires: {currentUser.expireDate}
                      </li>
                      <li>
                        <FiCheckCircle style={{ fontSize: "14px" }} /><a style={{ color: "#017363" }} href='https://chat.whatsapp.com/HE2IVMvTTbs88NXWSE3Eqn' target='_blank'>Click here to join the Member Chat</a>
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
      {/* <Greeting /> */}
      {/* Start User Collection */}
      <WindowShift
        className="mt--80 mb--80"
        main="News"
        secondary="Ticket Collection"
        mainContent={
          <Fragment>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb--30 mb_sm--0">

                    <h2 className="title">News</h2>
                    <ul>
                      <li className="mt--40">
                        <p> Positions for active members are open - check them by clicking the link below!
                        </p>
                      </li>
                      <div className={`portfolio mt--20`} style={{ width: '300px', marginLeft: '-40px' }}>
                        <a
                          href='https://docs.google.com/forms/d/e/1FAIpQLSdB-wgvtaJkDEtbgJIMFYcnzjrRw9Q_cikeWgivNL6-sWcagA/viewform'
                          target='_blank'
                          className="thumbnail-inner"
                        >
                          <img
                            className="thumbnail portfolio-img"
                            src='/assets/images/news/am.jpg'
                            alt="IT"
                          />
                        </a>
                      </div>
                      <li className="mt--40">
                        <p> Bulgarian Society Netherlands is looking for ITs - learn more by clicking below!
                        </p>
                      </li>
                      <div className={`portfolio mt--20`} style={{ width: '300px', marginLeft: '-40px' }}>
                        <a
                          href='https://docs.google.com/forms/d/1poBOEjyKD-F5JMo02qtdeabubIVYTvrj0YMb58w3z9c/viewform?edit_requested=true'
                          target='_blank'
                          className="thumbnail-inner"
                        >
                          <ImageFb
                            className="thumbnail portfolio-img"
                            src='/assets/images/news/it.webp'
                            fallback='/assets/images/news/it.jpg'
                            alt="IT"
                          />
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        }
        secondaryContent={
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="mb--30 mb_sm--0">
                  <h2 className="title mb--40">Ticket Collection</h2>
                  {currentUser.tickets.length > 0 ? (
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
        }
      />
      {/* End User Collection */}

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
    <PageLoading />
  );
};

export default User;
