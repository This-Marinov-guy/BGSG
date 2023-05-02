import React, { Component, Fragment } from "react";
import Header from "../component/header/Header";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";

const Error404 = () => {
  return (
    <Fragment>
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Page Error  */}
      <div className="error-page-inner bg_color--4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h1 className="title theme-gradient">404!</h1>
                <h3 className="sub-title">Page not found</h3>
                <span>The page you were looking for could not be found.</span>
                <div className="error-button">
                  <a className="rn-button-style--2 btn-solid" href="/">
                    Back To Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Error  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </Fragment>
  );
};

export default Error404;
