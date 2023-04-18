import React, { useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHttpClient } from "../hooks/http-hook";
import { FiChevronUp, FiX } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import ModalWindow from "./ui/ModalWindow";
import Locked from "./ui/Locked";
import Loader from "./ui/Loader";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/user";
import { removeModal, selectModal, showModal } from "../redux/modal";

const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  policyTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  payTerms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const EventOtherDetails = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const { loading, sendRequest } = useHttpClient();

  const eventId = useParams().eventId;

  const user = useSelector(selectUser);
  const modal = useSelector(selectModal);

  const dispatch = useDispatch();

  const history = useHistory();

  const closeHandler = () => {
    dispatch(removeModal());
  };

  const submitMemberForm = async () => {
    console.log("hello");
  };

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const responseData = await sendRequest(`user/${user.userId}`);
        setCurrentUser(responseData.user);
      } catch (err) {
        console.log(err);
      }
    };
    if (user.token) {
      fetchCurrentUser();
    }
  }, [sendRequest, user]);

  const eventDetails = [
    {
      id: "0",
      title: "Freedom Fest",
      description: "National day of Bulgaria",
      bgImage: "4",
      when: "3.3.2023, 20:00",
      where: "Business Hall",
      entry: user.token ? 20 : 30,
      text: [
        "Wild party",
        "We will provide drinks and snacks for our socity. Music and great spirit will crowd the dance floor as we promisethis will be an unforgetable experience that will be talked about for weeks after! Do not waste time and bookyour spot",
      ],
      images: ["portfolio-big-01.jpg"],
    },
  ];
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Portfolio Details" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {currentUser && currentUser.status !== "active" && (
        <Locked show={currentUser.status} />
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
                  `user/edit-info/${user.userId}`,
                  "PATCH",
                  formData
                );
                window.location.reload();
              } catch (err) {}
            }}
            initialValues={{
              image: "",
              name: currentUser.name,
              surname: currentUser.surname,
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
                  <FiX className="x_icon" onClick={closeHandler} />
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
      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${
          eventDetails[Number(eventId)].bgImage
        }`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  {eventDetails[Number(eventId)].title}
                </h2>
                <p>{eventDetails[Number(eventId)].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className="rn-portfolio-details ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-details">
                <div className="inner">
                  <h2>About</h2>
                  <p className="subtitle">
                    {eventDetails[Number(eventId)].text[0]}
                  </p>
                  <p>{eventDetails[Number(eventId)].text[1]}</p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>When</span>
                      <h4>{eventDetails[Number(eventId)].when}</h4>
                    </div>

                    <div className="port-view">
                      <span>Where</span>
                      <h4>{eventDetails[Number(eventId)].where}</h4>
                    </div>

                    <div className="port-view">
                      <span>Fee</span>
                      <h4>{eventDetails[Number(eventId)].entry} euro</h4>
                    </div>
                  </div>
                  <button
                    onClick={
                      user.token
                        ? () => {
                            submitMemberForm();
                          }
                        : () => {
                            dispatch(showModal());
                          }
                    }
                    className="rn-button-style--2 btn-solid"
                  >
                    Register
                  </button>
                  <p className="information mt--20">
                    {user.token
                      ? "*As a member, your information will be taken directly from your profile so by pressing this button you will be automatically registered"
                      : "Press the button to proceed to filling your details"}
                  </p>
                </div>
                <br />
                {/* Start Contact Map  */}
                <div className="container">
                  <div className="rn-contact-map-area position-relative">
                    {/* <div style={{ height: "450px", width: "100%" }}>
                      <GoogleMapReact
                        defaultCenter={eventDetails[0].center}
                        defaultZoom={eventDetails[0].zoom}
                      >
                        <AnyReactComponent
                          lat={59.955413}
                          lng={30.337844}
                          text="My Marker"
                        />
                      </GoogleMapReact>
                    </div> */}
                  </div>
                </div>
                {/* End Contact Map  */}
                <br />
                <div className="portfolio-thumb-inner">
                  <div className="thumb position-relative mb--30">
                    <img
                      src={`/assets/images/portfolio/${
                        eventDetails[Number(eventId)].images[0]
                      }`}
                      alt="Portfolio Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};
export default EventOtherDetails;
