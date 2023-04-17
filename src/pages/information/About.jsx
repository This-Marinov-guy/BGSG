import React from "react";
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import CounterTwo from "../../elements/counters/CounterTwo";
import AboutUs from "../../component/HomeLayout/homeOne/AboutUs";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

const About = React.memo(() => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="About" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"About"} />
      {/* End Breadcrump Area */}

      {/* Start About Area  */}
      <AboutUs />
      {/* End About Area  */}

      {/* Start CounterUp Area */}
      <div className="rn-counterup-area pt--140 p pb--110 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="fontWeight500">What we have achieved</h3>
              </div>
            </div>
          </div>
          <CounterTwo />
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start History Area */}
      {/* <div className="about-wrapper mb--40">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-7 col-md-12">
                <div className="section-title">
                  <h2 className="title">History</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <p>dkajshdjsahd dhksajhd kajsdhaks dhak</p>
            </div>
          </div>
        </div> */}
      {/* End History Area */}
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
});

export default About;
