import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCircle, FiEdit, FiChevronUp } from "react-icons/fi";
import FooterTwo from "../../component/footer/FooterTwo";
import ScrollToTop from "react-scroll-up";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";

const User = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Profile" />
      <HeaderTwo
        title="Your Profile"
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Info Area */}

      <div className="service-area ptb--120 bg_color--1 mt--120">
        <div className="container">
          <div className="row service-one-wrapper center_div">
            <div className="col-lg-6 col-md-12 col-12 ">
              <div className="service service__style--2 team_member_border-1">
                <div className="content center_div">
                  <img src={`https://bgsg-users.s3.amazonaws.com/f654209c-80e6-4120-9ed9-11f15a6cb993.jpeg`} alt="profile" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="service service__style--2 team_member_border-2">
                <div style={{ width: "100%" }} className="content">
                  <h2>Hello again Dimitar!</h2>
                  <div className="hor_section mb--40">
                    <p className="mt--20">Your information</p>
                    <FiEdit
                      className="edit_btn"
                      onClick={() => {
                        console.log("yes");
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
                        Dimitar Stamatov
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Age: 21
                      </li>
                      <li>
                        <FiCircle style={{ fontSize: "14px" }} /> Email:
                        stamatov31@gmail.com
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
                  <p>We will soon post information for our 2nd member event. Stay tuned!</p>
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
              <h2 className="title">Ticket Collection</h2>
              <p>No tickets purchased</p>
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
  );
};

export default User;
