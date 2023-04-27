import React from "react";
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import CounterOne from "../../elements/counters/CounterOne";
import AboutUs from "../../component/HomeLayout/homeOne/AboutUs";
import ScrollToTop from "react-scroll-up";
import { FiCheckCircle, FiChevronUp } from "react-icons/fi";
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
                <CounterOne />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End CounterUp Area */}

      {/* Start Speech Area */}
      <div className="mt--40 mb--100">
        <div className="container">
          <p className="mb--20">
            <FiCheckCircle />
            &nbsp;&nbsp; We are Bulgarian Society Groningen. We decided to start
            the society since we saw the need for it.
          </p>
          <p className="mb--20">
            <FiCheckCircle />
            &nbsp;&nbsp; We saw the need for bringing Bulgarian students
            together. Being far away from home is hard on everyone. So we
            decided to make a second home for all the Bulgarian people who have
            found themselves in Groningen.
          </p>
          <p className="mb--20">
            <FiCheckCircle />
            &nbsp;&nbsp; We saw the need for creating an environment that will
            stimulate the Bulgarians in Groningen to develop and reach their
            goals and to become the best version of themselves.
          </p>
          <p className="mb--20">
            <FiCheckCircle />
            &nbsp;&nbsp; We saw the need in Groningen for celebrating and
            develop the Bulgarian culture!
          </p>
          <p className="mb--20">
            <FiCheckCircle />
            &nbsp;&nbsp; We saw the need to showcase the Bulgarian culture,
            spirit and capabilities to the city of Groningen!
          </p>
          <h2 className="center_text mt--40">
            This is why we created Bulgarian Society Groningen!
          </h2>
        </div>
      </div>
      {/* End Speech Area */}
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
