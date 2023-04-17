import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import Slider from "react-slick";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { slickDot } from "../../page-demo/script";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import PortfolioList from "../../elements/portfolio/PortfolioList";
import { FutureEventsContent } from "./FutureEvents";
import { PastEventsContent } from "./PastEvents";

const list = [
  {
    image: "1",
    category: "Bulgarian Dinner",
    title: "Try our traditional cuisine",
  },
  {
    image: "2",
    category: "Trifon Zarezan",
    title: "No valantine - wine is always there for us ",
  },
  {
    image: "3",
    category: "Freedom Fest",
    title: "Celebration of the national day of Bulgaria",
  },
];

class Events extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Events" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Events"} />
        {/* End Breadcrump Area */}

        {/* Start Future Events Area */}
        <FutureEventsContent />
        {/* End Future Events Area */}

        {/* Start Past Events Area */}
        <PastEventsContent />
        {/* End Past Events Area */}

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
export default Events;
