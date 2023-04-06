import React, { Component } from "react";
import Breadcrumb from "../../elements/common/Breadcrumb";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class Committees extends Component {
  render() {
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
            <div className="row">
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
  }
}
export default Committees;
