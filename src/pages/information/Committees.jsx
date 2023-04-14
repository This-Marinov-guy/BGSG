import React, { Component, useState } from "react";
import Breadcrumb from "../../elements/common/Breadcrumb";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

const Committees = () => {
  const [committee, setCommittee] = useState("Sports");

  return (
    <React.Fragment>
      <PageHelmet pageTitle="Committees" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Meet the Committees"} />
      {/* End Breadcrump Area */}

      {/* Start Team Area  */}
      <div className="rn-team-area ptb--120 bg_color--5">
        <div className="container">
          <div className="options-btns-div">
            <button
              className={
                committee === "Sports"
                  ? "rn-button-style--2 btn-solid option-btn"
                  : "rn-button-style--2 rn-btn-reverse option-btn"
              }
              onClick={() => {
                setCommittee("Sports");
              }}
            >
              Personal development and Sports
            </button>
            <button
              className={
                committee === "Culture"
                  ? "rn-button-style--2 btn-solid option-btn"
                  : "rn-button-style--2 rn-btn-reverse option-btn"
              }
              onClick={() => {
                setCommittee("Culture");
              }}
            >
              Social and Culture
            </button>
          </div>
          <div >
            <h2 className="center_text mb--20">
              {committee === "Culture"
                ? "Social and Culture"
                : "Personal development and Sports"}
            </h2>
            <br />
            <h2 className="center_text">Expect soon...</h2>
          </div>
        </div>
      </div>
      {/* End Team Area  */}

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

export default Committees;
