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
  notificationTypeTerms: yup
    .string()
    .required("Please select a prefered way of being contacted"),
  notificationTerms: yup
    .bool()
    .required()
    .oneOf([true], "Terms must be accepted"),
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
    try {
      const responseData = await sendRequest(
        "user/check-email",
        "POST",
        JSON.stringify({
          name: currentUser.name,
          surname: currentUser.surname,
          phone: currentUser.phone,
          email: currentUser.email,
          notificationTypeTerms: currentUser.notificationTypeTerms
            ? currentUser.notificationTypeTerms
            : "Any",
        }),
        {
          "Content-Type": "application/json",
        }
      );
    } catch (err) {}
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
              try {
                const responseData = await sendRequest(
                  "user/check-email",
                  "POST",
                  JSON.stringify({
                    name: values.name,
                    surname: values.surname,
                    phone: values.phone,
                    email: values.email,
                    notificationTypeTerms: values.notificationTypeTerms,
                  }),
                  {
                    "Content-Type": "application/json",
                  }
                );
              } catch (err) {}
            }}
            initialValues={{
              name: "",
              surname: "",
              phone: "",
              email: "",
              notificationTerms: false,
              notificationTypeTerms: "",
            }}
          >
            {() => (
              <Form
                encType="multipart/form-data"
                className="center_section"
                id="form"
                style={{ padding: "50px" }}
              >
                <h3>Fill your details and register</h3>
                <FiX className="x_icon" onClick={closeHandler} />

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
                    <div className="hor_section_nospace mt--40">
                      <Field
                        style={{ maxWidth: "30px", margin: "10px" }}
                        type="checkbox"
                        name="notificationTerms"
                      ></Field>
                      <p className="information">
                        I consent to being notified by the organizer through the
                        below contact/s
                      </p>
                    </div>
                    <ErrorMessage
                      className="error"
                      name="notificationTerms"
                      component="div"
                    />
                    <Field as="select" name="notificationTypeTerms">
                      <option value="" disabled>
                        Contact By
                      </option>
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Email & WhatsApp">Both</option>
                    </Field>
                    <ErrorMessage
                      className="error"
                      name="notificationTypeTerms"
                      component="div"
                    />
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
