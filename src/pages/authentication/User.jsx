import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCircle, FiEdit } from "react-icons/fi";
import PageHelmet from "../../component/common/Helmet";
import HeaderTwo from "../../component/header/HeaderTwo";

const User = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Profile" />
      <HeaderTwo
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
        <div style={{padding:'20px',backgroundColor:'#017363'}} className="container">
          <h2 className="center_text mt--120">Your Profile</h2>
        </div>
      {/* Start Info Area */}

      <div className="service-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row service-one-wrapper center_div">
            <div className="col-lg-6 col-md-12 col-12 ">
              <div className="service service__style--2 team_member_border-1">
                <div className="content">
                  <img src={`/assets/images/team/team-01.jpg`} alt="profile" />
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
              <p>Stay tuned for more information</p>
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
    </React.Fragment>
  );
};

export default User;
