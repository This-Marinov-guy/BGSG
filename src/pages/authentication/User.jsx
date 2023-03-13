import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FiCircle, FiEdit } from "react-icons/fi";
import PageHelmet from "../../component/common/Helmet";
import Header from "../../component/header/HeaderLogo";
import { FiUserPlus } from "react-icons/fi";

const User = () => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Join" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      <div className="container">
        <h2 className="center_text">Your Profile</h2>
      </div>
      {/* Start Options Area */}

      <div className="service-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row service-one-wrapper center_div">
            <div>
              <div className="service service__style--2 team_member_border-2">
                <div style={{ width: "100%" }} className="content">
                  <h2>Hello again Dimitar!</h2>
                  <div className="hor_section mb--40">
                    <p className="mt--20">Your information</p>
                   <FiEdit className="edit_btn" onClick={()=>{console.log('yes')}}/>
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

      {/* End Options Area */}
      {/* Start Form Area */}

      {/* End Form Area */}
    </React.Fragment>
  );
};

export default User;
