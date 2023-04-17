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
        <div className="portfolio-area pt--120 pb--100 bg_color--5">
          <div className="rn-slick-dot">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                    <h2 className="title">What can you expect soon</h2>
                    <p>
                      Click on an event for more information and buy a ticket on
                      our website
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="slick-space-gutter--15 slickdot--20">
                    <PortfolioList
                      styevariation="text-center mt--40"
                      column="col-lg-4 col-md-6 col-sm-6 col-12"
                      item="6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Future Events Area */}

        {/* Start Past Events Area */}
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
                              <div className="portfolio-button">
                                <a
                                  className="rn-btn"
                                  href={`/blog-details/${index}`}
                                >
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
