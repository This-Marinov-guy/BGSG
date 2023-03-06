import React, { useState } from "react";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/HeaderLogo";
import { FiUserPlus, FiUsers } from "react-icons/fi";

const options = [
  {
    icon: <FiUsers />,
    title: "Member",
    description:
      "Be part of the society. With this status you get discounts for our events and buying tickets becomes easier. Members have their names displayed on tickets and also they gain a collection here on their page!",
    price: 5,
  },
];
const SignUp = () => {
  const [membership, setMembership] = useState();

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Join" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <div className="container">
        <h2 className="center_text">Become a member</h2>
      </div>
      {/* Start Options Area */}

      <div className="service-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row service-one-wrapper center_div">
            {options.map((val, i) => (
              <div key={i}>
                <button
                  style={
                    val.title === "Active Member"
                      ? { border: "5px solid #ffd700" }
                      : { border: "5px solid #017363" }
                  }
                  className="service service__style--2"
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({
                        top: document.getElementById("form").scrollHeight,
                        behavior: "smooth",
                      });
                    }, 100);
                  }}
                >
                  <div className="hor_section">
                    <div className="icon">{val.icon}</div>
                    <h3 style={{ width: "40%" }}>
                      {val.price} euro per semester
                    </h3>
                  </div>
                  <div className="content">
                    <h3>{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* End Options Area */}
      {/* Start Form Area */}

      <div className="blog-comment-form pb--120 bg_color--1">
        <div className="container">
          <div className="inner">
            <form id="form" style={{ padding: "50px" }} action="#">
              <h3>Fill your details and register as a {membership}</h3>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="text" placeholder="Surname"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="number" placeholder="Age" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="tel" placeholder="Phone (WhatsApp)" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="email" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <select placeholder="University">
                    <option value="" disabled selected>
                      Select your univerisity
                    </option>
                    <option value="RUG">RUG</option>
                    <option value="Hanze">Hanze</option>
                    <option value="">Other univerisity</option>
                    <option value="working">Working</option>
                  </select>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input
                      type="text"
                      placeholder="State the university"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="text" placeholder="Course of studying"></input>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="number" placeholder="Student Number"></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input type="password" placeholder="Password"></input>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="rnform-group">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="hor_section_nospace">
                  <input
                    style={{ width: "30px", margin: "10px" }}
                    type="checkbox"
                  ></input>
                  <p>I agree</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="hor_section_nospace">
                  <input
                    style={{ width: "30px", margin: "10px" }}
                    type="checkbox"
                  ></input>
                  <p>I agree</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="hor_section_nospace">
                  <input
                    style={{ width: "30px", margin: "10px" }}
                    type="checkbox"
                  ></input>
                  <p>I agree</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="hor_section_nospace">
                  <input
                    style={{ width: "30px", margin: "10px" }}
                    type="checkbox"
                  ></input>
                  <p>I agree</p>
                </div>
              </div>
              <button
                style={{ marginTop: "40px" }}
                type="submit"
                className="rn-button-style--2 btn-solid"
              >
                <span>Sign Up</span>
              </button>
              <div style={{ alignItems: "flex-start" }} className="action_btns">
                <a className="rn-button-style--1" href="/login">
                  I am a member
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Form Area */}
    </React.Fragment>
  );
};

export default SignUp;
