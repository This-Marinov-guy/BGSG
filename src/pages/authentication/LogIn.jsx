import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/HeaderLogo";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Login" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        <div className="container">
          <h2 className="center_text">Log in your account</h2>
        </div>
        <div className="blog-comment-form pb--120 bg_color--1">
          <div className="container">
            <div className="inner">
              <form
                style={{ padding: "50px" }}
                className="center_section"
                action="#"
              >
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="text" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="password" placeholder="Password"></input>
                  </div>
                </div>
                  <button
                  style={{marginTop:"40px"}}
                    type="submit"
                    className="rn-button-style--2 btn-solid"
                  >
                    <span>Log in</span>
                  </button>
                  <div className="action_btns">
                  <a className="rn-button-style--1" href="#">Forgot my pasword</a>
                  <a className="rn-button-style--1" href="/signup">Not a member</a>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
