import React from "react";
import Breadcrumb from "../../elements/common/Breadcrumb";
import PageHelmet from "../../component/common/Helmet";
import Team from "../../elements/Team";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

const Board = React.memo(() => {
  return (
    <React.Fragment>
      <PageHelmet pageTitle="Board" />
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Board"} />
      {/* End Breadcrump Area */}

      {/* Start Team Area  */}
      <div className="rn-team-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title service-style--3 text-left mb--25 mb_sm--0">
                <h2 className="title">Meet the Board</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
          </div>
        </div>
      </div>
      {/* End Team Area  */}

      {/* Start Testimonial Area */}
      {/* <div className="rn-testimonial-area bg_color--1 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div> */}
      {/* End Testimonial Area */}

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

export default Board;
