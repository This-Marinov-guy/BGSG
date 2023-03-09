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

class PastEvents extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Past Events" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Past Events"} />
        {/* End Breadcrump Area */}

        {/* Start Portfolio Area */}
        <div className="portfolio-area pt--120 pb--140 bg_color--5">
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">What have we done so far</h2>
                    <p>
                      Let us introduce you to our events that brought success
                      beyond our expectations
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <Slider {...slickDot}>
                      {list.map((value, index) => (
                        <div className="portfolio" key={index}>
                          <div className="thumbnail-inner">
                            <img
                              className="thumbnail"
                              src={`/assets/images/portfolio/portfolio-${value.image}.jpg`}
                              alt="Event Images"
                            />
                          </div>
                          <div className="content">
                            <div className="inner">
                              <p>{value.category}</p>
                              <h4>
                                <p>{value.title}</p>
                              </h4>
                              <div className="portfolio-button">
                                <a className="rn-btn" href="/blog-details">
                                  Tell me more
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

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
export default PastEvents;
