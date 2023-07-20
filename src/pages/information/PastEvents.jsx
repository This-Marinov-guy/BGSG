import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import Breadcrumb from "../../elements/common/Breadcrumb";
import Slider from "react-slick";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { slickDot } from "../../page-demo/script";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import ImageFb from "../../elements/ui/ImageFb";
import { Link } from "react-router-dom";

const list = [
  {
    url: "Dodgeball",
    image: "11",
  },
  {
    url: "Board Game Night",
    image: "8",
  },
  {
    url: "The Entrepreneur Series II",
    image: "5",
  },
  {
    url: "Easter Lunch",
    image: "6",
  },
  {
    url: "The Entrepreneur Series I",
    image: "4",
  },
  {
    url: "Freedom Fest",
    image: "3",
  },
  {
    url: "Trifon Zarezan",
    image: "2",
  },
  {
    url: "Bulgarian Dinner",
    image: "1",
  },
];

class PastEventsContent extends Component {
  render() {
    return (
      <div className="portfolio-area pt--80 pb--140 bg_color--5">
        <div className="rn-slick-dot">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                  <h2 className="title">Past Events</h2>
                  <p>
                    Let us introduce you to our events that brought success
                    beyond our expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slick-space-gutter--15 slickdot--100">
                  <Slider {...slickDot}>
                    {list.map((value, index) => (
                      <div className="portfolio portfolio-slider" key={index}>
                        <Link
                          to={`/event-reflection/${value.url}`}
                          className="thumbnail-inner-2"
                        >
                          <ImageFb
                            className="thumbnail"
                            src={`/assets/images/portfolio/portfolio-${value.image}.webp`}
                            fallback={`/assets/images/portfolio/portfolio-${value.image}.jpg`}
                            alt="Event Images"
                          />
                        </Link>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PastEventsListed extends Component {
  render() {
    return (
      <div className="portfolio-area pt--120 pb--140 bg_color--5">
        <div className="rn-slick-dot">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                  <h2 className="title">Past Events</h2>
                  <p>
                    Let us introduce you to our events that brought success
                    beyond our expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            {list.map((value, index) => (
              <div className="portfolio portfolio-slider grid_item" key={index}>
                <Link
                  to={`/event-reflection/${value.url}`}
                  className="thumbnail-inner-2"
                >
                  <ImageFb
                    className="thumbnail"
                    src={`/assets/images/portfolio/portfolio-${value.image}.webp`}
                    fallback={`/assets/images/portfolio/portfolio-${value.image}.jpg`}
                    alt="Event Images"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class PastEvents extends Component {
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
        <Breadcrumb title={"Past Events"} />
        {/* End Breadcrump Area */}

        {/* Start Past Events Area */}
        <PastEventsListed />
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
export { PastEvents, PastEventsContent, PastEventsListed };
