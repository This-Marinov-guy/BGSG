import React, { useState, useEffect } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHttpClient } from "../../hooks/http-hook";
import { FiChevronUp, FiX } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import ModalWindow from "../../elements/ui/ModalWindow";
import Locked from "../../elements/ui/Locked";
import Alert from "react-bootstrap/Alert";
import Loader from "../../elements/ui/Loader";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/user";
import { removeModal, selectModal, showModal } from "../../redux/modal";
import { useObjectGrabUrl } from "../../hooks/object-hook";
import { OPEN_NON_SOCIETY_EVENTS } from "../../util/EVENTS";

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

const NonSocietyEvent = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const { loading, sendRequest } = useHttpClient();

  const target = useObjectGrabUrl(OPEN_NON_SOCIETY_EVENTS);

  const user = useSelector(selectUser);
  const modal = useSelector(selectModal);

  const dispatch = useDispatch();

  const history = useHistory();

  const closeHandler = () => {
    dispatch(removeModal());
  };

  const closeNotificationHandler = () => {
    dispatch(removeModal());
    props.setNotification(null);
  };

  const submitMemberForm = async () => {
    try {
      const responseData = await sendRequest(
        "event/register/non-society-event",
        "POST",
        JSON.stringify({
          event: target.title,
          date: target.when,
          user: "member",
          name: currentUser.name + " " + currentUser.surname,
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
      props.setNotification(
        <Alert className="error_panel" variant="success">
          <div className="action_btns">
            <h3>Thank you for the interest!</h3>
            <FiX className="x_icon" onClick={closeNotificationHandler} />
          </div>
          <p>
            Your registration for the event is complete! The organizer will soon
            contact you!
          </p>
        </Alert>
      );
      history.push("/");
      setTimeout(() => closeNotificationHandler(), 7000);
    } catch (err) { }
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

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Other Event Details" />
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
          {user.token ? (currentUser ? <div className="center_section pd--20">
            <FiX style={{ fontSize: '25px' }}
              className="x_icon"
              onClick={closeNotificationHandler}
            />
            <h3 className="center_text title">Finish registration as {currentUser.name + ' ' + currentUser.surname}</h3>
            <button
              disabled={loading}
              type="submit"
              className="rn-button-style--2 btn-solid mt--30"
            >
              {loading ? <Loader/> : <span>Register</span>}
            </button></div> : <Loader center/>) : <Formik
              className="inner"
              validationSchema={schema}
              onSubmit={async (values) => {
                try {
                  const responseData = await sendRequest(
                    "event/register/non-society-event",
                    "POST",
                    JSON.stringify({
                      event: target.title,
                      date: target.when,
                      user: "normal",
                      name: values.name + " " + values.surname,
                      phone: values.phone,
                      email: values.email,
                      notificationTypeTerms: values.notificationTypeTerms,
                    }),
                    {
                      "Content-Type": "application/json",
                    }
                  );
                  props.setNotification(
                    <Alert className="error_panel" variant="success">
                      <div className="action_btns">
                        <h3>Thank you for the interest!</h3>
                        <FiX
                          className="x_icon"
                          onClick={closeNotificationHandler}
                        />
                      </div>
                      <p>
                        Your registration for the event is complete! The organizer
                        will soon contact you!
                      </p>
                    </Alert>
                  );
                  history.push("/");
                  setTimeout(() => closeNotificationHandler(), 7000);
                } catch (err) { }
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
          </Formik>}
        </ModalWindow>
      )}

      {/* Start Breadcrump Area */}
      <div
        className={`rn-page-title-area pt--120 pb--190 bg_image bg_image--${target.bgImage}`}
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title theme-gradient">{target.title}</h2>
                <p>{target.description}</p>
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
                  <p className="subtitle">{target.text[0]}</p>
                  <p>{target.text[1]}</p>

                  <div className="portfolio-view-list d-flex flex-wrap">
                    <div className="port-view">
                      <span>When</span>
                      <h4>{target.when}</h4>
                    </div>

                    <div className="port-view">
                      <span>Where</span>
                      <h4>{target.where}</h4>
                    </div>

                    <div className="port-view">
                      <span>Fee</span>
                      <h4>
                        {user.token
                          ? target.memberEntry + " euro (discounted)"
                          : target.entry + " euro"}
                      </h4>
                    </div>
                  </div>
                  <button
                    onClick={
                      () => {
                        dispatch(showModal());
                      }
                    }
                    className="rn-button-style--2 btn-solid"
                  >
                    Register
                  </button>
                  <p className="information mt--20">
                    {user.token
                      ? "*As a member, your information will be taken directly from your profile"
                      : "Press the button and fill your details"}
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
                      src={`${target.images[0]}.jpg`}
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
export default NonSocietyEvent;
