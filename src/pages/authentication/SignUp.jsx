import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/HeaderLogo";
import { FiUserPlus, FiUsers } from "react-icons/fi";

const options = [
  {
    icon: <FiUserPlus />,
    title: "Active Member",
    description:
      "Help us with event plannig and preparation. You will get discounts for events and you will be posted in our 'Active member' list",
    price: 100,
  },
  {
    icon: <FiUsers />,
    title: "Member",
    description:
      "Be part of the society. With this status you can buy tickets from the platform and get the news straight up",
    price: 10,
  },
];
class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Join" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        <div className="container">
          <h2 className="center_text">Be part of us</h2>
          <p className="center_text">Choose your status in the society and scroll to fill your details</p>
        </div>
        {/* Start Options Area */}
        <div className="service-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row service-one-wrapper">
              {options.map((val, i) => (
                <div
                  className={"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"}
                  key={i}
                >
                  <a href="/service-details">
                    <div
                      style={
                        val.title === "Active Member"
                          ? { border: "5px solid #ffd700" }
                          : { border: "5px solid #017363" }
                      }
                      className="service service__style--2"
                    >
                      <div className="hor_section">
                        <div className="icon">{val.icon}</div>
                        <h3 style={{width:"40%"}}>{val.price} euro per month</h3>
                      </div>
                      <div className="content">
                        <h3>{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* End Options Area */}
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
                  <a className="rn-button-style--1" href="#">No account</a>
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
