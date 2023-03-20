import React, { useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
import { useDispatch } from "react-redux";
import { login } from "../../redux/user";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/Header";
import Loader from "../../elements/ui/Loader";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loginFormValues, setLoginFormValues] = useState({
    email: "",
    password: "",
  });

  const { loading, sendRequest } = useHttpClient();

  const dispatch = useDispatch();

  const history = useHistory();

  const changeFormInputHandler = (event) => {
    setLoginFormValues((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
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
      <div className="container mt--200">
        <h2 className="center_text">Log in your account</h2>
      </div>
      <div className="blog-comment-form pb--120 bg_color--1">
        <div className="container">
          <div className="inner">
            <form
              style={{ padding: "50px" }}
              className="center_section"
              onSubmit={async (event) => {
                event.preventDefault();
                try {
                  console.log(loginFormValues);
                  const responseData = await sendRequest(
                    `http://localhost:80/api/user/login`,
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
                  history.push("/");
                } catch (err) {}
              }}
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
              {loading ? (
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
              <div className="action_btns">
                <a className="rn-button-style--1" href="#">
                  Forgot my pasword
                </a>
                <a className="rn-button-style--1" href="/signup">
                  Not a member
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
