import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHttpClient } from "../../hooks/http-hook";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../../redux/user";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/Header";
import Loader from "../../elements/ui/Loader";
import Alert from "react-bootstrap/Alert";
import ModalWindow from "../../elements/ui/ModalWindow";
import { FiX } from "react-icons/fi";
import { removeModal, selectModal, showModal } from "../../redux/modal";

const schema = yup.object().shape({
  token: yup.string().required("Please provide the token send to you by email"),
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
});

const Login = (props) => {
  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });
  const [confirmChanging, setConfirmChanging] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [validationToken, setValidationToken] = useState("");

  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const modal = useSelector(selectModal);

  const history = useHistory();

  const changeFormInputHandler = (event) => {
    setLoginFormValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const closeHandler = () => {
    dispatch(removeModal());
    props.setNotification(null);
    setConfirmChanging(false);
  };

  const sendTokenHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        "user/send-password-token",
        "POST",
        JSON.stringify({
          email: loginFormValues.email,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      setUserEmail(responseData.email);
      setValidationToken(responseData.token);
      setConfirmChanging(true);
    } catch (err) {}
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        `user/login`,
        "POST",
        JSON.stringify({
          email: loginFormValues.email,
          password: loginFormValues.password,
        }),
        {
          "Content-Type": "application/json",
        }
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
      props.setNotification(
        <Alert className="error_panel" variant="success">
          <div className="action_btns">
            <h3>Welcome Back!</h3>
            <FiX className="mr--20" onClick={closeHandler} />
          </div>
          <p>
            Nice seeing you again! Please check the news section so you are up
            to date!
          </p>
          <a
            onClick={closeHandler}
            href={`/user/${responseData.userId}`}
            className="rn-button-style--2 rn-btn-green mt--40"
          >
            Go to Profile
          </a>
        </Alert>
      );
      history.push("/");
      setTimeout(() => closeHandler(), 5000);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Login" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
        dark
      />
      {modal && (
        <ModalWindow show={modal}>
          {!confirmChanging ? (
            <form
              className="container pd--40"
              onSubmit={(event) => sendTokenHandler(event)}
            >
              <div className="hor_section">
                <h3>
                  You are about to start proceedure for changing password!
                  Please enter your account email!
                </h3>
                <FiX className="mr--20" onClick={closeHandler} />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(event) => changeFormInputHandler(event)}
              />
              {!confirmChanging && (
                <button
                  type="submit"
                  className="rn-button-style--2 btn-solid mt--80"
                >
                  Proceed
                </button>
              )}
            </form>
          ) : (
            <Formik
              className="inner"
              validationSchema={schema}
              onSubmit={async (values) => {
                try {
                  const responseData = await sendRequest(
                    `user/change-password`,
                    "PATCH",
                    JSON.stringify({
                      email: userEmail,
                      password: values.password,
                    }),
                    {
                      "Content-Type": "application/json",
                    }
                  );
                } catch (err) {}
                props.setNotification(
                  <Alert className="error_panel" variant="success">
                    <div className="action_btns">
                      <h3>Success!</h3>
                      <FiX className="mr--20" onClick={closeHandler} />
                    </div>
                    <p>You successesfully changed your password!</p>
                  </Alert>
                );
                dispatch(removeModal());
                history.push("/login");
                setTimeout(() => closeHandler(), 5000);
              }}
              initialValues={{
                token: "",
                password: "",
                confirmPassword: "",
              }}
            >
              {() => (
                <Form id="form" style={{ padding: "50px" }}>
                  <div className="hor_section">
                    <h3>Reset you password</h3>
                    <FiX className="mr--20" onClick={closeHandler} />
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="rnform-group">
                        <Field
                          autoComplete="off"
                          type="number"
                          placeholder="Validation token"
                          name="token"
                        />
                        <ErrorMessage
                          className="error"
                          name="token"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="rnform-group">
                        <Field
                          autoComplete="off"
                          type="password"
                          placeholder="New Password"
                          name="password"
                        ></Field>
                        <ErrorMessage
                          className="error"
                          name="password"
                          component="div"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="rnform-group">
                        <Field
                          autoComplete="off"
                          type="password"
                          placeholder="Confirm New Password"
                          name="confirmPassword"
                        />
                        <ErrorMessage
                          className="error"
                          name="confirmPassword"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                  {loading && confirmChanging ? (
                    <Loader />
                  ) : (
                    <button
                      type="submit"
                      className="rn-button-style--2 btn-solid mt--80"
                    >
                      Update password
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          )}
        </ModalWindow>
      )}
      <div className="container mt--200">
        <h2 className="center_text">Log in your account</h2>
      </div>
      <div className="blog-comment-form pb--120 bg_color--1">
        <div className="container">
          <div className="inner">
            <form
              style={{ padding: "50px" }}
              className="center_section"
              onSubmit={(event) => loginHandler(event)}
            >
              <div className="col-lg-6 col-md-12 col-12">
                <div className="rnform-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(event) => changeFormInputHandler(event)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="rnform-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(event) => changeFormInputHandler(event)}
                  ></input>
                </div>
              </div>
              {loading && !modal ? (
                <Loader />
              ) : (
                <button
                  style={{ marginTop: "40px" }}
                  type="submit"
                  className="rn-button-style--2 btn-solid"
                >
                  <span>Log in</span>
                </button>
              )}
            </form>
            <div className="action_btns">
              <button
                style={{ border: "none" }}
                className="rn-button-style--1"
                onClick={() => {
                  dispatch(showModal());
                }}
              >
                Forgot my pasword
              </button>
              <a className="rn-button-style--1" href="/signup">
                Not a member
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
